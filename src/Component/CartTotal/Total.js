import style from './total.module.css'
export default function Total(){
    return(
        <div className={style.main}>
            <span className={style.text}>Your Total is :</span>
            <div className={style.buttons}>
                <button>Checkout</button>
                <button>Home</button>
            </div>
        </div>
    )
}