import { Outlet } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'
import Footer from '../Footer/Footer'
import Shop from '../../Component/ShoppingCartItems/Shop'
import style from './secondRoot.module.css'
export default function ShopPage(){
    return(
        <div className={style.main}>
            <TopBar></TopBar>
            <Shop></Shop>
            <Footer></Footer>
        </div>
    )
}