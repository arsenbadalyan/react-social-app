import React from 'react';
import classes from './Post.module.css';

const Post = ({ img }) => {
    return (
        <div className={classes.postList__item}>
            <div className={classes.postList__item_desc}>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consectetur expedita id minus fuga. Doloribus, corporis quia
                    eveniet nisi exercitationem deserunt accusamus eum maiores
                    vel ab quo aliquam repellat quisquam excepturi.
                </p>
            </div>
            <div className={classes.postList__item_img}>
                <img src={img} alt="post" />
            </div>
            <div className={classes.postList__item_btns}>
                <button>Like</button>
                <button>Dislike</button>
            </div>
        </div>
    );
};

export default Post;
