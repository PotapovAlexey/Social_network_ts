import React, {useState} from 'react';
import style from './Users.module.css';
import userPhoto from '../../images/defaultUser.png';
import {InitialUserReducerStateType} from '../../Redux/types';
import {NavLink} from "react-router-dom";


type PropsType = {
    usersPage: InitialUserReducerStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChange: (pageNumber: number) => void


}


const Users = (props: PropsType) => {

    let [firstPages, setFirstPages] = useState({
        start: 0,
        end: 5
    })

    let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let setNewPages = (p: number) => {

        if (p === firstPages.end) {
            setFirstPages({
                start: firstPages.end,
                end: firstPages.end + 5
            })

        }
        if (p===firstPages.start+1){
            setFirstPages({
                end:firstPages.start,
                start:firstPages.start-5

            })
        }
        if (p===1){
            setFirstPages({
                start:0,
                end:5

            })
        }


        props.onPageChange(p)
    }
    return (
        <div className={style.users}>
            <div>
                {pages.slice(firstPages.start, firstPages.end).map(p => {
                    return <button className={props.usersPage.currentPage === p ? style.selectedPage : ''}
                                 onClick={() => {
                                     setNewPages(p)
                                 }}


                    >{p}</button>
                })}
                <span>. . .</span>
                <button className={props.usersPage.currentPage === pages.length - 1 ? style.selectedPage : ''}
                      onClick={() => {
                          props.onPageChange(pages.length)
                      }}

                >{pages.length}</button>
            </div>
            {/* <div>{pages.map(p => {
                return <span className={props.usersPage.currentPage === p ? style.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChange(p)
                             }}

                >{p}</span>
            })}
            </div>*/}
            <div className={style.usersWrapper}>
                {props.usersPage.users.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img className={style.usersImgSettings}
                             src={u.photos.small != null ? u.photos.small : userPhoto}
                             alt="user"/>
                        </NavLink>
                        <div>{u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                        </div>
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>


                </div>)}
            </div>

        </div>
    )
}
export default Users
