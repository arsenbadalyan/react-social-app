import React from 'react';
import { NavLink } from 'react-router-dom';

const Message = ({ imgURL, userName, to }) => {
    return (
        <NavLink to={to}>
            <div className="messages_list__item">
                <div
                    className="messages_list__item_img bg_rules"
                    style={{
                        background: 'url(' + imgURL + ')',
                    }}
                ></div>
                <div className="messages_list__item_info">
                    <h5>{userName}</h5>
                    <p>Are you comin???</p>
                </div>
            </div>
        </NavLink>
    );
};

export default Message;
