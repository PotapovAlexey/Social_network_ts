import React from "react";
import style from "./Nav.module.css"
import {NavLink} from "react-router-dom";


const Nav = () => {
    let navArray = [
        {path: "/profile", title: "Profile" ,id:1},
        {path: "/dialogs", title: "Message",id:2},
        {path: "/news", title: "News",id:3},
        {path: "/music", title: "Music",id:4},
        {path: "/settings", title: "Settings",id:5},

    ]
    let sidebarArray = [
        {name: "Viktor", img: "https://s00.yaplakal.com/pics/pics_original/0/0/8/10694800.jpg",id:1},
        {name: "Roma", img: "https://s00.yaplakal.com/pics/pics_original/0/0/8/10694800.jpg",id:2},
        {name: "Alex", img: "https://s00.yaplakal.com/pics/pics_original/0/0/8/10694800.jpg",id:3}
    ]

    return (
        <nav className={style.nav}>
            {navArray.map(nav =>
                <div className={style.link} key={nav.id}>
                    <NavLink to={nav.path}>{nav.title}</NavLink>
                </div>)}
                <div className={style.sidebarWrapper}>
            {sidebarArray.map(s =>
                <div className={style.sidebar} key={s.id}>
                    <img src={s.img} alt="icon"/>
                    <span>{s.name}</span>
                </div>
            )}
                </div>

        </nav>
    )
}

export default Nav;