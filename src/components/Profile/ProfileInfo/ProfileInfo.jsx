import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "./../../../assets/img/user-avatar.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return (
      <div className={style.preloader}>
        <Preloader />
      </div>
    );
  }
  return (
    <div className={style.profile}>
      <div className={style.photo}>
        <img
          src={
            props.profile.photos.large !== null
              ? props.profile.photos.large
              : userPhoto
          }
          alt=""
        />
      </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <div className={style.info}>
        <h3>Information</h3>
        <p>Full Name: {props.profile.fullName}</p>
        <p>Facebook: {props.profile.contacts.facebook}</p>
        <p>
          Job:
          {props.profile.lookingForAJob ? (
            <img src="/work_icon.svg" alt="Ищу" />
          ) : (
            <img src="/no_work_icon.svg" alt="Не ищу работу" />
          )}
        </p>
        <p>{props.profile.lookingForAJobDescription}</p>
        <p>Status: {props.profile.aboutMe}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
