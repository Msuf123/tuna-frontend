import { createSlice } from "@reduxjs/toolkit";
import fetchFishData from "./GetFishData";

const fishSlice=createSlice({
    name:'fishSlice',
    initialState:[{fish_name:'Tuna',fish_price:100,image:'https://as2.ftcdn.net/v2/jpg/03/14/68/67/1000_F_314686744_dvRiiXuRg6b9EIA1a4wzadc8xEwFYi82.jpg'}]
    ,extraReducers(builder){
        builder.addCase(fetchFishData.fulfilled,(state,action)=>{
            console.log(action.payload)
            return [...action.payload]
        })
    }
    
})
export default fishSlice.reducer