import React from "react";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom"


const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png"
                 alt="logo"/>
                 <div className={style.loginArea} >
                     <NavLink to={'/login'}>Login</NavLink>
                 </div>
        </header>
    )
}
export default Header