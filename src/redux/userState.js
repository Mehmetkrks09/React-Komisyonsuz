import { createSlice } from "@reduxjs/toolkit";
import Login from "../pages/Login";


export const userState=createSlice({

    name:'User',
    initialState:{
        userId:0,
    },
    reducers:{
        userId:(state,action)=>{
        
          state.userId=action.payload
          console.log("Çalıştım");
        }
    }
})

export const{userId}=userState.actions

export default userState.reducer