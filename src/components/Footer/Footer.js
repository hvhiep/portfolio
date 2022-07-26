import React from 'react';
import styles from './Footer.module.scss';
function Footer() {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.inner}>
                <span>footer</span>
            </div>
        </footer>
    );
}

export default Footer;
