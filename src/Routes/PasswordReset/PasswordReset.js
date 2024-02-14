import style from './passReset.module.css'
export default function PasswordReset(){
    return(
        <div className={style.main}>
            <span className={style.heading}>Enter your email!</span>
            <span className={style.small}>Enter The registerd eamil to recive a email for a password reset.</span>
            <input placeholder='xyz@gmail.com'></input>
            <button>Send Email</button>
        </div>
    )
}