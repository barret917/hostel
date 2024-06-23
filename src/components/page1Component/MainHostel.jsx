import React, { useState, useEffect } from 'react'
import style from './MainHostel.module.scss'
import Range from './RangeWorkLoad'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
    dots: true,
    centerMode: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
}

function MainHostel({ cardInfo }) {
    const [showAl, setShowAl] = useState([]) //стэйт для данных с сервера
    useEffect(() => {
        fetch('https://667016df0900b5f87249621e.mockapi.io/imgHostel') //данные прилетают с сервера
            .then((res) => {
                if (res.status === 429) {
                    throw new Error('Too many request please try again later')
                }
                if (!res.ok) {
                    throw new Error('network res was not ok' + res.statusText)
                }
                return res.json()
            })
            .then((json) => {
                return setShowAl(json)
            })
            .catch((error) => {
                console.log('sos', error)
            })
    }, [])

    return (
        <div>
            <div>
                <div>
                    <div>
                        <h3>Адрес</h3>
                        <p>
                            <span>ул.</span>
                            {cardInfo.addres}
                        </p>
                    </div>
                    <img
                        src="https://cf.bstatic.com/static/img/bcom_logo_blue_bg/f12f834e849b2a7f752a14b2598a6ddfeda1e713.svg"
                        alt=""
                    />
                </div>
                <div>
                    <h2>Хостел {cardInfo.name}</h2>
                    <p>{cardInfo.text}</p>
                    <Range />
                </div>
            </div>

            <div>
                <ul>
                    <Slider {...settings}>
                        {showAl.map((item) => {
                            Object.values(item).map((val) => {
                                ;<li>
                                    <img src={val} alt="" />
                                </li>
                            })
                        })}
                    </Slider>
                </ul>
            </div>

            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default MainHostel
