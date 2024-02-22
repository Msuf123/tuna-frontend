import Filter from "../Filter/Filter";
import ProductSection from "../ProductsSection/ProductSection";
import style from './shop.module.css'
export default function Shop(){
    
    return(
        <div className={style.main}>
            {/* <Filter></Filter> */}
            <ProductSection></ProductSection>
        </div>
    )
}