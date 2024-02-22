import style from './eachItem.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export default function EachItem({name,price,src,index}){
    const url=useLocation()
const nav=useNavigate()
    
    return(
        <div className={style.main} tabIndex={index+1} onClick={()=>{
         nav('/fish/'+name)
        }}>
            {url.pathname==='/cart'?<span className={style.quantity}>x4</span>:null}
            <img src={`http://localhost:3003/img/${src}`}></img>
            <div className={style.footer}>
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </div>
    )
}