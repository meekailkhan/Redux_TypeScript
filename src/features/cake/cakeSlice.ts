import {createSlice,PayloadAction} from '@reduxjs/toolkit'

type initialState = {
    numOfCake : number
}

const initialState : initialState = {
    numOfCake : 10
}


const cakeSlice = createSlice({
    name : "cake",
    initialState,
    reducers : {
        ordered : (state)=>{
            state.numOfCake--
        },
        restored : (state,action:PayloadAction<number>)=>{
            state.numOfCake += action.payload
        }
    }
})


export default cakeSlice.reducer
export const {ordered,restored} = cakeSlice.actions