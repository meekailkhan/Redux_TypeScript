import { ordered as cakeOrder } from '../cake/cakeSlice'
import {createSlice,PayloadAction} from '@reduxjs/toolkit'

type initialState = {
    numOfIceCreame : number
}

const initialState:initialState = {
    numOfIceCreame : 20
}

const iceCreameSlice = createSlice({
    name : 'icecreame',
    initialState,
    reducers : {
        ordered : (state)=>{
            state.numOfIceCreame--
        },
        restored : (state,action:PayloadAction<number>)=>{
            state.numOfIceCreame += action.payload
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(cakeOrder,state =>{
            state.numOfIceCreame--
        })
    }
})

export default iceCreameSlice.reducer
export const {ordered,restored} = iceCreameSlice.actions