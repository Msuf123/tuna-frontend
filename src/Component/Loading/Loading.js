import style from './loading.module.css'
import ReactLoading from 'react-loading';
export default function Loading(){
    return(
        <div className={style.main}>
            <ReactLoading type={'spin'} color={'black'} height={'80px'} width={'80px'} />
        </div>
    )
}