import React from 'react';
import styles from './Header.module.scss';
function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <h1>
                    <a className={styles.logo} href='#home'>My Portfolio</a>
                </h1>
                <nav className={styles.nav}>
                    <a className={styles.nav__link} href="#home">Home</a>
                    <a className={styles.nav__link} href="#education">Education</a>
                    <a className={styles.nav__link} href="#skills">Skills</a>
                    <a className={styles.nav__link} href="#projects">Projects</a>
                    <a className={styles.nav__link} href="#contactme">ContactMe</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
