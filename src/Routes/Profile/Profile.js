import { Outlet, useNavigate } from 'react-router-dom'
import style from './profile.module.css'
import SideProfileBar from '../../Component/SideProfileBar/SideProfileBar'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import PopUp from '../../Component/Popup/popUp'
import { setTrue } from '../../Component/Popup/popSlice'
export default function Profile(){
    const url=useSelector((state)=>state.url)
    const nav=useNavigate()
    const dispatch=useDispatch()
    const popup=useSelector((state)=>state.popup)
    return(
        <div className={style.main}>
            <span className={style.text}>Profile</span>
            <SideProfileBar></SideProfileBar>
            <button className={style.buttons}
            onClick={()=>{
                fetch(url+'logout',{credentials:'include'}).then(async (res)=>{
                    
                    let response=await res.json()
                    console.log(response)
                    if(response){
                     dispatch(setTrue())
                    }
                })
            }}
            >Logout</button>
            <button className={style.home}
            onClick={()=>{
                nav('/shop')
            }}
            >Home</button>
            <Outlet></Outlet>
            {popup?<PopUp text={'Logged Out Successfully'}></PopUp>:null}
        </div>
    )
}