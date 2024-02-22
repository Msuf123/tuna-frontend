import { Link, useNavigate } from 'react-router-dom'
import src from '../../Images/loginCat.jpg'
import style from  './login.module.css'
import { useSelector } from 'react-redux'
export default function Login(){
    const url=useSelector((state)=>state.url)
    const nav=useNavigate()
    console.log(url)
    return(
        <div className={style.main}>
            <img src={src}></img>
        <div className={style.login}>
            <input placeholder='Enter email id or password'></input>
            <div className={style.password}>
            <input placeholder='Enter the password'></input>
            <Link>Forgot Your password?</Link>
            
            </div>
            <button onClick={async ()=>{
                fetch('http://localhost:3003/login',{method:'Post',credentials:'include',
                headers:{
                    "Content-Type": "application/json"
                },body:JSON.stringify({userName:'akshatmalik18t@gmail.com',password:'robo',emailId:'akshatmalik18t@gmail.com'})
                }).then(async (s)=>{
                    const reslut=await s.json()
                    if(reslut.auth){
                       nav('/shop')
                    }

                })
            }}>Login</button>
        </div>
        </div>
    )
}