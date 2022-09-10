import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className="user-cover-image">
                <img
                    src="https://wallpaperaccess.com/full/51363.jpg"
                    alt="cover"
                />
            </div>
            <div className="user-info">
                <div className="user-info__profile-picture">
                    <img
                        src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
                        alt="user"
                    />
                </div>
                <div className="user-info__main-info">
                    <h3>Lipina Yulia</h3>
                    <ul>
                        <li>Dateof Birth: 2 January</li>
                        <li>City: Minsk</li>
                        <li>Education: BSU'11</li>
                        <li>Website: https://linkedin.com/lipinayulia</li>
                    </ul>
                </div>
            </div>
            <div className="make-post">
                <div className="make-post__header">
                    <h4>My Posts</h4>
                </div>
                <div className="make-post__textarea">
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Whats new??"
                    ></textarea>
                </div>
                <div className="make-post__btn">
                    <button>POST</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
