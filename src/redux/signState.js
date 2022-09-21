import { createSlice } from "@reduxjs/toolkit";
import SignedIn from "../layouts/SignedIn";

export const signState=createSlice({
    name:SignedIn,
    initialState:{
        signState:  JSON.parse(localStorage.getItem('signState')),
    },
    reducers:{
        setSignState:state=>{
          state.signState=!state.signState
          window.localStorage.setItem('signState', JSON.stringify(state.signState))
        
     
        }
    }
})

export const{setSignState}=signState.actions

export default signState.reducer