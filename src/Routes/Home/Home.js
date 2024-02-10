import src from '../../Images/puss.png'
import lob from '../../Images/lobster.png'
import style from './home.module.css'
export default function Home(){
    return(
        <div className={style.main}>
            <div className={style.content}>
                <h1>Margot's Sea food</h1>
                <img src={src}></img>
                
                <img src={lob}></img>
                <button>Buy</button>
            </div>
        </div>
    )
}