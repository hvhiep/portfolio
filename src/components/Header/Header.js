import React from 'react';
import styles from './Header.module.scss';
import { Player } from '@lottiefiles/react-lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
function Header() {
    {
        /* <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_sf1bpcsj.json"
                style={{ height: '100px', width: '100px', borderWidth: 1 }}
            >
            </Player> */
    }
    {
        /* <FontAwesomeIcon style={{ color: 'red' }} icon={faCoffee} size="6x" /> */
    }
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <h1>
                    <a className={styles.logo} href='#'>My Portfolio</a>
                </h1>
                <nav className={styles.nav}>
                    <a className={styles.nav__link} href="#">Home</a>
                    <a className={styles.nav__link} href="#About">About</a>
                    <a className={styles.nav__link} href="#Education">Education</a>
                    <a className={styles.nav__link} href="#Skills">Skills</a>
                    <a className={styles.nav__link} href="#Project">Project</a>
                    <a className={styles.nav__link} href="#ContactMe">ContactMe</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
