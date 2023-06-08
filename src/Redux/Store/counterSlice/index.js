import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counterSlice',
    initialState:{counter:0},
    reducers:{
        increment:(state) => {
            state.counter += 1
        },
        dekriment:(state) => {
            state.counter -= 1
        },
        incByAmount:(state , action) => {
            state.counter += action.payload
        },
        decByAmount:(state , action) => {
            state.counter -= action.payload
        },
    }
})

export const {increment , dekriment , incByAmount , decByAmount} = counterSlice.actions

export default counterSlice.reducer