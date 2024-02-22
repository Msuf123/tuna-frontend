import { useDispatch } from 'react-redux'
import style from './popup.module.css'
import { setFalse } from './popSlice'
export default function PopUp({text}){
    const dispatch=useDispatch()
    return(
        <div className={style.main}>
            <div className={style.inner}>
                <span tabIndex={1} onClick={()=>{
              dispatch(setFalse())
                }} className={style.cross}>X</span>
            <span>{text}</span>
            </div>
        </div>
    )
}