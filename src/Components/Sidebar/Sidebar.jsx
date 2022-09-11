import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? classes.activeLink : ''
                            }
                            to="/profile"
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? classes.activeLink : ''
                            }
                            to="/messages"
                        >
                            Messages
                        </NavLink>
                    </li>
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
