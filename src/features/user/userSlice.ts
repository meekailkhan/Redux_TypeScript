import axios from 'axios'
import {createSlice,createAsyncThunk,PayloadAction} from '@reduxjs/toolkit'

type Users = {
    id : number
    name : string
}


type InitialState = {
    loading : boolean
    users : Users[]
    error : string
}

const initialState:InitialState = {
    loading : false,
    users : [],
    error : ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async() => {
    console.log('fetching...')
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = response.data.map((item:Users) =>{
        return item
    })
    return data
})


const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {},
    extraReducers : (builder) =>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action:PayloadAction<Users[]>)=>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false
            state.users = []
            state.error = action.error.message || 'something went,s wrong'
        })
    }
})

export default userSlice.reducer  