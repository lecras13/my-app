import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../assets/common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>
                <img src='https://www.helmholtz.ai/fileadmin/HAICU/IMG/HMGU_AI_Keyvisual_quer_ohneText.jpg'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <br></br>

                <div>{props.profile.aboutMe}</div>

                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.website}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.contacts.youtube}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.mainLink}</div>

                <div>{props.profile.lookingForAJob}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.userId}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;