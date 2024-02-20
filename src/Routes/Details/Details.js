import Images from "../../Component/DetialImage/Images";
import style from './detail.module.css'
export default function Details(){
    return(
        <div className={style.main}>
            <div className={style.back}>
               <span>&larr;</span>
            </div>
            <div className={style.cart}>
            <i class="fa fa-shopping-cart"></i>
            </div>
            <Images></Images>
            <div className={style.paragraph}>
                <h1>Heading Name</h1>
                <p>Tiusjfwdklfkwf</p>
                
                <button>Add to card</button>
                
                
            </div>
        </div>
    )
}