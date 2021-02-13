import React, {useEffect} from 'react';
import Users from './Users';
import Preloader from '../../Preloader/Preloader';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    changeIsFetchingAC,
    followAC,
    getUsersThunkCreator,
    setCurrentPageAC, setTotalUsersCountAC, setUsersAC,
    unfollowAC
} from "../../Redux/users-reducer";
import {getUsers} from "../../Api/api";


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
 /*     const setUsers = (users: any) => {
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
*/

    useEffect(() => {
        dispatch(getUsersThunkCreator(usersPage.currentPage, usersPage.pageSize))

         /*changeIsFetching(true)
         getUsers(usersPage.currentPage,usersPage.pageSize).then(data => {
             changeIsFetching(false)
             setUsers(data.items)
             setTotalUsersCount(data.totalCount)


         })*/
    },[])


    const onPageChange = (pageNumber: number) => {
        dispatch(getUsersThunkCreator(pageNumber, usersPage.pageSize))

        /*setCurrentPage(pageNumber)
        changeIsFetching(true)
        getUsers(pageNumber,usersPage.pageSize).then(data => {
            changeIsFetching(false)
            setUsers(data.items)
            setTotalUsersCount(data.totalUsersCount)
        })*/
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


