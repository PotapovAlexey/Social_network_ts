import React, {useEffect} from 'react';
import Users from './Users';
import Preloader from '../../Preloader/Preloader';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followAC,
    getUsersThunkCreator,
    unfollowAC
} from "../../Redux/users-reducer";


const UsersContainer = () => {

    const dispatch = useDispatch();
    const usersPage = useSelector((state: AppStateType) => state.usersPage)


    const follow = (userId: number) => {
        dispatch(followAC(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowAC(userId))
    }


    useEffect(() => {
        dispatch(getUsersThunkCreator(usersPage.currentPage, usersPage.pageSize))
    }, [dispatch, usersPage.currentPage, usersPage.pageSize])


    const onPageChange = (pageNumber: number) => {
        dispatch(getUsersThunkCreator(pageNumber, usersPage.pageSize))

    }


    return <div>
        {usersPage.isFetching ? <Preloader/> : null}
        <Users follow={follow}
               unfollow={unfollow}
               usersPage={usersPage}
               onPageChange={onPageChange}
        />


    </div>

}

export default UsersContainer


