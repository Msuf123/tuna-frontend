import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function EmailVerify(){
    const url=useLocation()
    useEffect(()=>{
    const token=new URLSearchParams(url.search)
    console.log(token.get('token'))
    fetch('http://localhost:3003/register?token='+token.get('token')).then(async (response)=>{
        const res=await response.json()
        console.log(res)
    })
    },[])
    return(
        <div>
            Your wmail is verifued
        </div>
    )
}