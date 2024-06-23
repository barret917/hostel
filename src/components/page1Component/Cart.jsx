import React from 'react'
import style from './Cart.module.scss'
import Range from './RangeWorkLoad'

export default function Cart({ cardInfo }) {
    return (
        <div className={style.cartBox}>
            <img className={style.imgHostel} src={cardInfo.img}></img>
            <h2 className={style.titleHostel}>{cardInfo.name}</h2>

            <Range className={style.rangeBox} cardInfo={cardInfo} />
        </div>
    )
}
