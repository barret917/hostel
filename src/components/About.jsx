import React from "react";
import style from "./About.module.scss"

export default function About(){
    return(
        <div className={style.aboutBox}>
        <h3 className={style.title}>О нас</h3>
        <hr className={style.titleBottom}/>
        <ul className={style.itemBox}>
            <li className={style.item}>Хостел “Гостевой дом”
               м. Бибирево ул. Плещеева 51
               тел: 89729998877</li>
            <hr/>
            <li className={style.item}>Хостел “Гостевой дом”
               м. Бибирево ул. Плещеева 51
               тел: 89729998877</li>
        </ul>
        </div>
    )
}