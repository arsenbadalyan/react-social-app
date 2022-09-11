import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={styles.header__logo}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"
                    alt="logo"
                />
            </div>
        </header>
    );
};

export default Header;
