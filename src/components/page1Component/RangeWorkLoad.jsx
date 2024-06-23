import React from "react";
import style from "./RangeWorkLoad.module.scss"

function Range({cardInfo}){
    return(
        <>
        <p className={style.freePlaces}>Заполненность хостела</p>
        <div className={style.boxRange}>
        <div
            className={style.range}
            style={{
                width: `${cardInfo.value}%`,
                backgroundColor:
                    cardInfo.value >=80
                        ? 'red'
                        : cardInfo.value > 50
                        ? 'orange'
                        : 'green',
            }}
        ></div>
    </div>
    <span className={style.count}>{`${cardInfo.value}%`}</span>
    </>
    )
}
export default Range