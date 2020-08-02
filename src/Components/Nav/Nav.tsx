import React from "react";
import style from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>

            <div className={style.link}>
                <NavLink to="/profile">Profile</NavLink>
            </div>

            <div className={style.link}>
                <NavLink to="/dialogs">Message</NavLink>
            </div>

            <div className={style.link}>
                <NavLink to="/news">News</NavLink>
            </div>

            <div className={style.link}>
                <NavLink to="/music">Music</NavLink>
            </div>

            <div className={style.link}>
                <NavLink to="/settings">Settings</NavLink>
            </div>


        </nav>
    )
}

export default Nav;