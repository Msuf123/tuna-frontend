import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchFishData=createAsyncThunk('serverData',async({url},thubk)=>{
    
   const fish_array= await fetch(url,{credentials:'include'})
   
   return await fish_array.json()
})
export default fetchFishData