import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <nav>
                <ul>
                    <li>Profile</li>
                    <li>Messages</li>
                    <li>News</li>
                    <li>Music</li>
                    <li>Friends</li>
                </ul>
                <ul>
                    <li>Settings</li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
