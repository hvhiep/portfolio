import styles from './Home.module.scss';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
function Home() {
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', scrollCheck);
        console.log('re-render');

        return () => window.removeEventListener('scroll', scrollCheck);
    }, []);

    const scrollCheck = () => {
        if (window.scrollY >= 70) {
            setIsScroll(true);
        } else setIsScroll(false);
    };

    const handleScrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <Header headerColorActive={isScroll} />
            <Content />
            <Footer />
            {isScroll ? (
                <button className={styles.scrollToTopBtn} onClick={handleScrollToTop}>
                    <FontAwesomeIcon className={styles.scrollToTopBtnIcon} icon={faArrowUp} size="2x" />
                </button>
            ) : null}
        </div>
    );
}

export default Home;
