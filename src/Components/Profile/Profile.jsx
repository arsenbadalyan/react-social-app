import React from 'react';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={classes.user_cover_image}>
                <img
                    src="https://wallpaperaccess.com/full/51363.jpg"
                    alt="cover"
                />
            </div>
            <div className={classes.user_info}>
                <div className={classes.user_info__profile_picture}>
                    <img
                        src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
                        alt="user"
                    />
                </div>
                <div className={classes.user_info__main_info}>
                    <h3>Lipina Yulia</h3>
                    <ul>
                        <li>Date of Birth: 2 January</li>
                        <li>City: Minsk</li>
                        <li>Education: BSU'11</li>
                        <li>Website: https://linkedin.com/lipinayulia</li>
                    </ul>
                </div>
            </div>
            <ProfilePosts />
        </div>
    );
};

export default Profile;
