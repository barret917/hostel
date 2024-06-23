import React from "react";
import style from "./Password.module.scss"

export default function Password(){
    return(
   <div className={style.passwordBox}>
      <h4 className={style.title}>Вход</h4>
      <div className={style.inputBox}>
        <input className={style.login} type="text" value="Логин" />
        <input className={style.login} type="password" value="Пароль"></input>
      </div>
      <button type="submit">Войти</button>

   </div>

    )
}
