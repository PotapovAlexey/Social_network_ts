import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {
    changeIsFetchingAC,
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from '../../Redux/users-reducer';


function UsersContainer1() {

   /* const dispatch = useDispatch();
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
    const changeIsFetching=(isFetching:boolean)=>{
        dispatch(changeIsFetchingAC(isFetching))
    }*/

    return (
        <div>

        </div>
    )

}

export default UsersContainer1
