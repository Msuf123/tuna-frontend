import { startTransition } from 'react'
import style from './register.module.css'
export default function Register(){
    return(
    <div className={style.outer}>
        <div className={style.main}>
            <div className={style.text}>
                    <span>Enter emial id:</span>
                    <input placeholder="Enter email id"></input>
            </div>
            <div className={style.text}>
                    <span>Enter username:</span>
                    <input placeholder="Enter the username"></input>
            </div>
            <div className={style.text}>
            <span>Enter password:</span>
            <input placeholder="Enter password"></input>
            </div>
            <button onClick={()=>{
                fetch('http://localhost:3003/register',{method:'Post',credentials:'include',
            headers:{
                "Content-Type": "application/json"
            },body:JSON.stringify({userName:'Akshat MAlik',password:'123sd',emailId:'akshatmalik18t@gmail.com'})
            }).then((s)=>{
                console.log(s)
            })
            }}>Sign-Up</button>
        </div>
        </div>
    )
}