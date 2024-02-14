import style from './image.module.css'
import src from '../../Images/fish.jpg'

export default function Images(){
    return(
        <div className={style.main}>
            <img src={src}></img>
        </div>
    )
}