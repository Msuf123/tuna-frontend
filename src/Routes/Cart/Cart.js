import Total from "../../Component/CartTotal/Total";
import ProductSection from "../../Component/ProductsSection/ProductSection";
import style from './cart.module.css'
export default function Cart(){
    return(
        <div className={style.main}>
           <span className={style.heading}>Cart</span>
           
           <ProductSection></ProductSection>
           
           <Total></Total>
        </div>
    )
}