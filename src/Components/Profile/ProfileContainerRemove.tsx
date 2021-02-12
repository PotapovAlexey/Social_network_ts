import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import ProfileApiComponent from "./ProfileContainer";
import {setUserProfileAC} from "../../Redux/profile-reducer";


const ProfileContainer1 = () => {

    const profilePage=useSelector((state:AppStateType)=>state.profilePage)
    const dispatch=useDispatch()

    let setUserProfile=(userId:number)=>{
        dispatch(setUserProfileAC(userId))
    }
    return (
        <div >
            <ProfileApiComponent
            profilePage={profilePage}
            setUserProfile={setUserProfile}
             />
        </div>
    )
}
export default ProfileContainer1