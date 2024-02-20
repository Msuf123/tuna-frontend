import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchFishData=createAsyncThunk('serverData',async(thubk)=>{
    
   const fish_array= await fetch('http://localhost:3003/fishData')
   
   return await fish_array.json()
})
export default fetchFishData