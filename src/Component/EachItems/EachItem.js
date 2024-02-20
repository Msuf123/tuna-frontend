import style from './eachItem.module.css'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
export default function EachItem({name,price,src}){
    const url=useLocation()

    
    return(
        <div className={style.main}>
            {url.pathname==='/cart'?<span className={style.quantity}>x4</span>:null}
            <img src={`http://localhost:3003/img/${src}`}></img>
            <div className={style.footer}>
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </div>
    )
}