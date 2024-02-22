import { useNavigate } from "react-router-dom"
import style from './loginw.module.css'
export default function LoginWarning(){
    const nav=useNavigate()
    return(
        <div className={style.main}>
            <div className={style.inner}>
                <span>Login To Add items to your cart!</span>
                <button onClick={()=>{
                    nav('/login')
                }}>Login</button>
            </div>
        </div>
    )
}