import React from 'react';
import Post from './Post/Post';
import classes from './ProfilePosts.module.css';

const ProfilePosts = () => {
    return (
        <div className={classes.make_post}>
            <div className={classes.make_post__header}>
                <h4>My Posts</h4>
            </div>
            <div className={classes.make_post__textarea}>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Whats new??"
                ></textarea>
            </div>
            <div className={classes.make_post__btn}>
                <button>POST</button>
            </div>
            <div className={classes.postList}>
                <Post
                    img={
                        'https://surfdiscovery.org/wp-content/uploads/2021/12/3-prichiny-zanyatsya-serfingom-vo-vremya-otpuska2.jpg'
                    }
                />
                <Post
                    img={
                        'https://surfdiscovery.org/wp-content/uploads/2021/12/3-prichiny-zanyatsya-serfingom-vo-vremya-otpuska2.jpg'
                    }
                />
                <Post
                    img={
                        'https://surfdiscovery.org/wp-content/uploads/2021/12/3-prichiny-zanyatsya-serfingom-vo-vremya-otpuska2.jpg'
                    }
                />
                <Post
                    img={
                        'https://surfdiscovery.org/wp-content/uploads/2021/12/3-prichiny-zanyatsya-serfingom-vo-vremya-otpuska2.jpg'
                    }
                />
            </div>
        </div>
    );
};

export default ProfilePosts;
