import { Link } from 'react-router-dom'
import src from '../../Images/loginCat.jpg'
import style from  './login.module.css'
export default function Login(){
    return(
        <div className={style.main}>
            <img src={src}></img>
        <div className={style.login}>
            <input placeholder='Enter email id or password'></input>
            <div className={style.password}>
            <input placeholder='Enter the password'></input>
            <Link>Forgot Your password?</Link>
            
            </div>
            <button>Login</button>
        </div>
        </div>
    )
}