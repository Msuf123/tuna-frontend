import { createAsyncThunk } from "@reduxjs/toolkit"



const postCart=createAsyncThunk('addToCart',({url,fish_name},thunkAPI)=>{
    fetch(url,{credentials:'include',headers:{'Content-Type':'application/json'},body:JSON.stringify({fish:fish_name})}).then((response)=>{
        return response.json()
    })
})
export default postCart