import { useEffect } from "react";
import Total from "../../Component/CartTotal/Total";
import ProductSection from "../../Component/ProductsSection/ProductSection";
import style from './cart.module.css'
import { useSelector } from "react-redux";
export default function Cart(){
    const url=useSelector((state)=>state.url)

    return(
        <div className={style.main}>
           <span className={style.heading}>Cart</span>
           
           <ProductSection></ProductSection>
           
           <Total></Total>
        </div>
    )
}