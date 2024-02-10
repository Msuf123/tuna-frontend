import style from './eachItem.module.css'
import src from '../../Images/fish.jpg'
export default function EachItem(){
    return(
        <div className={style.main}>

            <img src={src}></img>
            <span>Name</span>
            <span>Price</span>
        </div>
    )
}