import React, {useEffect} from 'react';
import axios from 'axios'
import Users from './Users';
import Preloader from '../../Preloader/Preloader';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    changeIsFetchingAC,
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../Redux/users-reducer";


/*
type PropsType = {
    usersPage: InitialUserReducerStateType
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    changeIsFetching: (isFetching: boolean) => void

    follow: (userId: number) => void
    unfollow: (userId: number) => void

}
*/


const UsersContainer = () => {

    const dispatch = useDispatch();
    const usersPage = useSelector((state: AppStateType) => state.usersPage)


    const follow = (userId: number) => {
        dispatch(followAC(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowAC(userId))
    }
    const setUsers = (users: any) => {
        dispatch(setUsersAC(users))
    }
    const setCurrentPage = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
    }
    const setTotalUsersCount = (totalUsersCount: number) => {
        dispatch(setTotalUsersCountAC(totalUsersCount))
    }
    const changeIsFetching = (isFetching: boolean) => {
        dispatch(changeIsFetchingAC(isFetching))
    }
    useEffect(() => {

        changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${usersPage.currentPage}&count=${usersPage.pageSize}& totalCount=${usersPage.totalUsersCount}`).then(response => {
            changeIsFetching(false)
            setUsers(response.data.items)
            setTotalUsersCount(response.data.totalCount)
        })
    })


    const onPageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
        changeIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${usersPage.pageSize}
        & totalCount=${usersPage.totalUsersCount}`).then(response => {
            changeIsFetching(false)
            setUsers(response.data.items)
        })
    }


    return <div>
       {/* {usersPage.isFetching ? <Preloader/> : null}*/}
        <Users follow={follow}
               unfollow={unfollow}
               usersPage={usersPage}
               onPageChange={onPageChange}
        />


    </div>

}

export default UsersContainer


