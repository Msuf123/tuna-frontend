import style from './register.module.css'
export default function Register(){
    return(
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
            <button>Sign-Up</button>
        </div>
    )
}