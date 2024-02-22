import { useSelector } from 'react-redux'
import style from './total.module.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Total(){
    const data=useSelector((state)=>state.fishData)
    let price=0
    const nav=useNavigate()
       
        if(Array.isArray(data)){
        data.filter((element)=>{
            
        
            price+=element.fish_price
        })}

    return(
        <div className={style.main}>
            <span className={style.text}>Your Total is :&#8377;{price}</span>
            <div className={style.buttons}>
                <button>Checkout</button>
                <button onClick={()=>{
                    nav('/shop')
                }}>Home</button>
            </div>
        </div>
    )
}