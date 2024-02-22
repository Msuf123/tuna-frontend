import { useEffect, useState } from "react";
import Images from "../../Component/DetialImage/Images";
import style from './detail.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import particularFish from "../../Component/ShoppingCartItems/particularFish";
import cartAdd from "../../Component/ShoppingCartItems/addCart";
export default function Details(){
   const url=useSelector((state)=>state.url)
   const data=useSelector((state)=>state.fishData)
   const pram=useParams()
   const dispatch=useDispatch()
   const nav=useNavigate()
   const finalUrl=url+'fishData/detail/'+pram.name
    useEffect(()=>{
        console.log(url+'cart')
       dispatch(particularFish(finalUrl))
    },[])
    return(
        <div className={style.main}>
            <div className={style.back}>
               <span tabIndex={1} onClick={()=>{
                  nav('/shop')
               }}>&larr;</span>
            </div>
            <div className={style.cart} tabIndex={2} onClick={()=>{
                nav('/cart')
            }}>
            <i class="fa fa-shopping-cart" ></i>
            </div>
            <Images src={data.length!==0?data[0].image:null}></Images>
            <div className={style.paragraph}>
                <h1>{data.length!==0?data[0].fish_name:'Loading'}</h1>
                <p>{data.length!==0?data[0].fish_desc:'Loading'}</p>
                <p>&#8377;{data.length!==0?data[0].fish_price:'Loading'}</p>
                <button onClick={()=>{
                    cartAdd(url+'cart',pram.name)
                }}>Add to card</button>
                
                
            </div>
        </div>
    )
}