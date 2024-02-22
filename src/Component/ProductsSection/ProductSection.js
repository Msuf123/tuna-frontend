import { useEffect } from "react";
import EachItem from "../EachItems/EachItem";
import style from './porductSeaction.module.css'
import { useDispatch, useSelector } from "react-redux";
import fetchFishData from "../ShoppingCartItems/GetFishData";
import { useLocation } from "react-router-dom";
import LoginWarning from "./LoginWarning";
export default function ProductSection(){
    const fishData=useSelector((state)=>state.fishData)
    const serverUrl=useSelector((state)=>state.url)
    const url=useLocation()
    const dispatch=useDispatch()
    useEffect(()=>{
      console.log(fishData,'This is after getting data')
      if(url.pathname==='/cart'){
         dispatch(fetchFishData({url:serverUrl+'cart'}))
      }
      else{
      dispatch(fetchFishData({url:serverUrl+'fishData'}))
    }
    
    },[])
    return(
        <div className={style.main}>
            {Array.isArray(fishData)?fishData.map((a,b)=><EachItem index={b} name={a.fish_name} price={a.fish_price} src={a.image} key={b}> </EachItem>):<LoginWarning></LoginWarning>}
            {Array.isArray(fishData)&&fishData.length===0?<span>Empty cart</span>:null}
            
            
        </div>
    )
}