import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.helmholtz.ai/fileadmin/HAICU/IMG/HMGU_AI_Keyvisual_quer_ohneText.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava
            </div>
        </div>
    );
}

export default ProfileInfo;