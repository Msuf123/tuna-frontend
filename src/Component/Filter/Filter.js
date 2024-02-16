import MoreSearch from "../MoreSearchFiltters/MoreSearch";
import SeachBar from "./SeachBar/SearchBar";
import style from './filter.module.css'
export default function Filter(){
    return(
        <div className={style.main}>
            <SeachBar></SeachBar>
            <input type='range'></input>
            <MoreSearch></MoreSearch>
            <button>Cart</button>
        </div>
    )
}