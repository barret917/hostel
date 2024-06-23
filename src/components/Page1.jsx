import React, { useEffect, useState } from 'react'
import { Welcome } from './Header'
import Cart from './page1Component/Cart'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card from './page1Component/Card'
import ButtonCard from './page1Component/ButtonCard'
import MainHostel from './page1Component/MainHostel'
import style from './Page1.module.scss'

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
const URL = 'https://667016df0900b5f87249621e.mockapi.io/items'

function Page() {
    const [visibleCoint, setvisibleCoint] = useState(2) // стэйт для отображения карточек хостелов

    const [showAll, setShowAll] = useState([]) // стэйт для данных с сервера

    useEffect(() => {
        ;(async () => {
            const meta = await fetch(URL).catch((error) => {
                console.log('sos', error)
            }) //данные прилетают с сервера

            const meta2 = await meta.json()
            setShowAll(meta2)
        })()
    }, [])

    //функция для сетстэйта отображения карточек
    const handleClick = () => {
        if (visibleCoint > 2) {
            setvisibleCoint(2)
        } else {
            setvisibleCoint(visibleCoint + 5)
        }
    }

    return (
        <>
            <Welcome className={style.welcom} />
            <Slider className={style.carousel} {...settings}>
                {showAll.map((item) => (
                    <Cart key={item.name} cardInfo={item} />
                ))}
            </Slider>
            <div className={style.weHostels}>
                <h3 className={style.ourHostels}>Наши хостелы</h3>
                <p className={style.changeHostel}>
                    Нажмите на карточку для перехода
                </p>
            </div>

            {showAll.slice(0, visibleCoint).map((item) => (
                <Card key={item.name} cartInfo={item} />
            ))}

            <div className={style.btnBox}>
                <ButtonCard onClick={handleClick} />
            </div>
        </>
    )
}

export default Page
