import { useEffect } from "react";
import EachItem from "../EachItems/EachItem";
import style from './porductSeaction.module.css'
import { useDispatch, useSelector } from "react-redux";
import fetchFishData from "../ShoppingCartItems/GetFishData";
export default function ProductSection(){
    const fishData=useSelector((state)=>state.fishData)
    const dispatch=useDispatch()
    useEffect(()=>{
      console.log(fishData)
      dispatch(fetchFishData())
      
    },[])
    return(
        <div className={style.main}>
            {fishData.map((a,b)=><EachItem name={a.fish_name} price={a.fish_price} src={a.image} key={b}> </EachItem>)}
            
            
            
        </div>
    )
}