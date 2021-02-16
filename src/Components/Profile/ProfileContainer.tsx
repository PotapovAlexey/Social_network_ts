import React, {useEffect} from "react";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {setUserIdThunk} from "../../Redux/profile-reducer";


type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType>


const ProfileContainer = (props: PropsType) => {
    const profilePage = useSelector((state: AppStateType) => state.profilePage)

    const dispatch = useDispatch()

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        dispatch(setUserIdThunk(userId))
    }, [])

    return (
        <div>
            <Profile profile={profilePage.profile}/>
        </div>
    )

}

export default withRouter(ProfileContainer)

