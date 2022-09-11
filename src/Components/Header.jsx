import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={styles.header__logo}>
                <img
                    src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png"
                    alt="logo"
                />
            </div>
        </header>
    );
};

export default Header;
