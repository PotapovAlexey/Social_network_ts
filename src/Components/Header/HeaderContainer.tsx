import React, {useEffect} from "react";
import style from "./Header.module.css"
import Header from "./Header";
import {useDispatch} from "react-redux";
import {setUserDataThunk} from "../../Redux/auth-reducer";

const HeaderContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserDataThunk())
    }, [dispatch])

    return (
        <div className={style.headerContainer}>


            <Header/>

        </div>
    )
}
export default HeaderContainer