import { createSlice } from "@reduxjs/toolkit";

const popup=createSlice({
    name:'popup',
    initialState:false,
    reducers:{
        setFalse:(state,action)=>{
          return false
        },
        setTrue:(state,action)=>{
            return true
        }
    }
})
export const {setFalse,setTrue}=popup.actions
export default popup.reducer