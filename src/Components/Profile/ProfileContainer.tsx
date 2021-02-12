import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from 'axios'
import {InitialProfileStateType} from "../../Redux/types";
import {RouteComponentProps,withRouter} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {setUserProfileAC} from "../../Redux/profile-reducer";



type OwnPropsType = {
    setUserProfile: (userId: number) => void
    profilePage: InitialProfileStateType
}
type PathParamsType={
    userId:string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType



const ProfileContainer=(props:PropsType)=>{
    const profilePage=useSelector((state:AppStateType)=>state.profilePage)
    const dispatch=useDispatch()

    let setUserProfile=(userId:number)=>{
        dispatch(setUserProfileAC(userId))
    }
useEffect(()=>{
    let userId = props.match.params.userId
    if(!userId){
        userId="2"
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
        setUserProfile(response.data)
    })
})

        return (
            <div>
                <Profile profile={profilePage.profile}/>
            </div>
        )

}
/*class ProfileApiComponent extends React.Component<PropsType> {

    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId
        if(!userId){
            userId="2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
        })

    }

    render = () => {
        return (
            <div>
                <Profile profile={this.props.profilePage.profile}/>
            </div>
        )
    }
}*/

export default withRouter(ProfileContainer)

/*export default ProfileApiComponent*/
