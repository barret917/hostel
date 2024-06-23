import {React,useState} from "react"
import style from "./ButtonCard.module.scss"

function ButtonCard({onClick}){
    const[state,SetState]=useState(true)
    const handle=()=>{
        SetState((prev)=>!prev)
    }

    const doubleFunction=()=>{
        handle()
        onClick()
    }
    
    return(
        <button onClick={doubleFunction} className={style.btn}>{state?"Показать еще":"Скрыть"}</button>
    )
}
export default ButtonCard