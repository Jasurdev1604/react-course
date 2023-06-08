import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counterSlice',
    initialState:{counter:0},
    reducers:{
        inc:(state) => {
            state.counter += 1
        },
        dec:(state) => {
            state.counter -= 1
        },
        incBy:(state , action) => {
            state.counter += action.payload
        },
        decBy:(state , action) => {
            state.counter -= action.payload
        }
    }
})

export const {inc , incBy , dec , decBy} = counterSlice.actions 

export default counterSlice.reducer