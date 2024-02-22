import { createAsyncThunk } from "@reduxjs/toolkit"



const particularFish=createAsyncThunk('prmasFish',async (url,thunkAPI)=>{

   return await fetch(url).then(async (a)=>{
        
        const data=await a.json()
        
        return data
    })
})
export default particularFish