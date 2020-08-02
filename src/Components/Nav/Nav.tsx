import React from "react";
import style from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.nav}>

            <div className={style.navReferences}>
                <NavLink to="/profile">Profile</NavLink>
            </div>

            <div className={style.navReferences}>
                <NavLink to="/dialogs">Message</NavLink>
            </div>

            <div className={style.navReferences}>
                <NavLink to="/news">News</NavLink>
            </div>

            <div className={style.navReferences}>
                <NavLink to="/music">Music</NavLink>
            </div>

            <div className={style.navReferences}>
                <NavLink to="/settings">Settings</NavLink>
            </div>


        </nav>
    )
}

export default Nav;