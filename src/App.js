import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import style from './App.module.scss'
import Page from './components/Page1'
import Page2 from "./components/Page2"
import About from "./components/About"
import { Header } from './components/Header'
import Password from './components/Password'

const nameHostel = [
    {
        name: 'Диско',
        value: 75,
        img: 'https://www.onetwotrip.com/ru/blog/wp-content/uploads/2019/01/suffix.jpg',
        pngIcon:
            'https://img.icons8.com/?size=100&id=qC0uiqw6o9Oh&format=png&color=000000',
        metro: 'Первомайская',
        price: '220',
        addres: 'Первомайская д26,к2',
    },
    {
        name: 'Смородина',
        value: 95,
        img: 'https://cdn.lifehacker.ru/wp-content/uploads/2015/01/29229147.jpg',
        pngIcon:
            'https://img.icons8.com/?size=100&id=66292&format=png&color=000000',
        metro: 'Преображенская',
        price: '340',
        addres: 'Калитникова д16,к12',
    },
    {
        name: '42',
        value: 90,
        img: 'https://34travel.me/media/posts/5a70191aad08a-hostel620.jpg',
        pngIcon:
            'https://img.icons8.com/?size=100&id=qC0uiqw6o9Oh&format=png&color=000000',
        metro: 'Проспект Мира',
        price: '500',
        addres: 'Ленина д21,к4',
    },
    {
        name: 'Дыня',
        value: 45,
        img: 'https://s0.rbk.ru/v6_top_pics/media/img/4/54/755486829229544.png',
        pngIcon:
            'https://img.icons8.com/?size=100&id=66292&format=png&color=000000',
        metro: 'Первомайская',
        price: '210',
        addres: 'Макиева д33,к22',
    },
    {
        name: 'Вафля',
        value: 70,
        img: 'https://www.onetwotrip.com/ru/blog/wp-content/uploads/2019/01/netizen-st-petersburg.jpg',
        pngIcon:
            'https://img.icons8.com/?size=100&id=qC0uiqw6o9Oh&format=png&color=000000',
        metro: 'Октябрьская',
        price: '50',
        addres: 'Асташкина д56,к42',
    },
    {
        name: 'Банан',
        value: 55,
        img: 'https://s.101hotelscdn.ru/uploads/image/hotel_image/498467/995280.jpg',
        pngIcon:
            'https://img.icons8.com/?size=100&id=66292&format=png&color=000000',
        metro: 'Волгоградский проспект',
        price: '160',
        addres: 'Талалихина д37,к92',
    },
    {
        name: 'Магония',
        value: 85,
        img: 'https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2020-05/samye-neobychnye-hostely.jpg',
        pngIcon:
            'https://img.icons8.com/?size=100&id=qC0uiqw6o9Oh&format=png&color=000000',
        metro: 'Автозаводская',
        price: '330',
        addres: 'Бабина д54,к26',
    },
]

function App() {
    
    return (<Router>
        <div className={style.body}>
            <div className={style.container}>
            <Header />
                <Routes>
                  <Route path='/home' element={<Page /> }/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/password' element={<Password/>} />
                </Routes>
            </div>
            
        </div>
        </Router>
    )
}

export default App
  
