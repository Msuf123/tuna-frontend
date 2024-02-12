import Images from "../../Component/DetialImage/Images";
import style from './detail.module.css'
export default function Details(){
    return(
        <div className={style.main}>
            <Images></Images>
            <div className={style.paragraph}>
                <p>Tiusjfwdklfkwf</p>
                <button>Add to card</button>
            </div>
        </div>
    )
}