import { useEffect } from "react";
import EachItem from "../EachItems/EachItem";
import style from './porductSeaction.module.css'
import { useSelector } from "react-redux";
export default function ProductSection(){
    const fishData=useSelector((state)=>state.fishData)
    useEffect(()=>{
      console.log(fishData)
    })
    return(
        <div className={style.main}>
            {fishData.map((a,b)=><EachItem name={a.name} price={a.price} src={a.src} key={b}> </EachItem>)}
            
            
            
        </div>
    )
}