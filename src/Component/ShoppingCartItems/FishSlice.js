import { createSlice } from "@reduxjs/toolkit";

const fishSlice=createSlice({
    name:'fishSlice',
    initialState:[{name:'Tuna',price:100,src:'https://as2.ftcdn.net/v2/jpg/03/14/68/67/1000_F_314686744_dvRiiXuRg6b9EIA1a4wzadc8xEwFYi82.jpg'}]
})
export default fishSlice.reducer