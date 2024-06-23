import style from './Header.module.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <>
            <header className={style.header}>
                <h1 className={style.title}>УЮТ</h1>
                <ul className={style.menu}>
                    <li>
                        <Link className={style.menu_item} to="/home">Главная</Link>
                    </li>
                    <li>
                        <Link className={classnames(
                            style.menu_item,
                            style.list_hostel
                        )} to="/list">Список хостелов</Link>
                    </li>
                    <li >
                        <Link className={style.menu_item} to="/about">О нас</Link>
                    </li>
                    <li><Link className={style.comeIn} to="/password">Войти</Link></li>
                </ul>
            </header>
            <hr className={style.hr}></hr>
        </>
    )
}

export function Welcome() {
    return (
        <div className={style.welcBox}>
            <h3 className={style.titleWelcom}>Привет, дорогой гость</h3>
            <p className={style.searchHostel}>
                Ищешь комфортный,приятный,хостел, расположенный около метро?
            </p>
        </div>
    )
}
