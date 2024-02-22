import style from './image.module.css'


export default function Images({src}){

    return(
        <div className={style.main}>
            <img src={`http://localhost:3003/img/${src}`}></img>
        </div>
    )
}