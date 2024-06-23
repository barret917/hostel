import React from "react";
import style from "./Card.module.scss"


function Card({cartInfo}){
    return(
        <div className={style.cartBox}>
            <div><img className={style.icon} src={cartInfo.pngIcon}></img></div>
            <div className={style.cartBoxInner}>
                <div>
                <h2 className={style.titleHostel}>{cartInfo.name}</h2>
                <p className={style.goodHostel}>Диско
                Отличный, недорогой хостел в неплохом районе! Отличный, недорогой хостел в неплохом районе!</p>
                </div>
                <div className={style.price}>
                    <span>{`м ${cartInfo.metro}`}</span>
                    <div>{`от ${cartInfo.price}руб`}</div>
                </div>
            </div>
        </div>
    )
}
export default Card