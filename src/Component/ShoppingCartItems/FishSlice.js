import { createSlice } from "@reduxjs/toolkit";
import fetchFishData from "./GetFishData";
import postCart from "../../Routes/Cart/cartData";
import particularFish from "./particularFish";

const fishSlice=createSlice({
    name:'fishSlice',
    initialState:[]
    ,extraReducers(builder){
        builder.addCase(fetchFishData.fulfilled,(state,action)=>{
            console.log(action.payload)
            return action.payload
        })
        builder.addCase(postCart.fulfilled,(state,action)=>{
            console.log(action.payload)
            return action.payload
        })
        builder.addCase(particularFish.fulfilled,(state,action)=>{
            console.log(action.payload)
          return action.payload
        })
    }
    
})
export default fishSlice.reducer