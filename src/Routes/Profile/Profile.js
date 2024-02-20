import { Outlet } from 'react-router-dom'
import style from './profile.module.css'
import SideProfileBar from '../../Component/SideProfileBar/SideProfileBar'
export default function Profile(){
    return(
        <div className={style.main}>
            <span className={style.text}>Profile</span>
            <SideProfileBar></SideProfileBar>
            <Outlet></Outlet>
        </div>
    )
}