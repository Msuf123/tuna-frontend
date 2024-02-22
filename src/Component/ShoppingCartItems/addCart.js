import { createAsyncThunk } from "@reduxjs/toolkit"

const cartAdd=(url,fish)=>{
    console.log(url)
    fetch(url,{credentials:'include',method:'POST',headers:{
        'Content-Type':'application/json'
    },body:JSON.stringify({fish})}).then(async (a)=>{
        console.log(await a.json())
    })
}
export default cartAdd
