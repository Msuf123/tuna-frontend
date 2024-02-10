import style from './moreSearch.module.css'
export default function MoreSearch(){
    return(
        <div className={style.main}>
            
            <input type='range'></input>
            <div>
            <input type='checkbox'></input>
            <span>Fresh</span>
            </div>
            <div>
            <input type='checkbox'></input>
            <span>Packed</span>
            </div>
        </div>
    )
}