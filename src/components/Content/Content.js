import React from 'react';
import clsx from 'clsx';
import styles from './Content.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMouse, faArrowDown } from '@fortawesome/free-solid-svg-icons';
function Content() {
    const bannerBtns = [
        {
            icon: faLinkedin,
            link: 'https://github.com/hvhiep',
        },
        {
            icon: faYoutube,
            link: 'https://github.com/hvhiep',
        },
        {
            icon: faGithub,
            link: 'https://github.com/hvhiep',
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={clsx('section', styles.banner)}>
                    <div className={styles.bannerBtnWrapper}>
                        {bannerBtns.map((item, index) => (
                            <a key={index} className={styles.bannerBtn} href={item.link} target="_blank">
                                <FontAwesomeIcon icon={item.icon} color="white" size="2x" />
                            </a>
                        ))}
                    </div>
                    <div className={styles.bannerContent}>
                        {/* first introduction */}
                        <div className={styles.bannerTextWrapper}>
                            <h1>Hi, I'm Hiep</h1>
                            <h4>Frontend Developer</h4>
                            <span>Fresh level experience in web and mobile design</span>
                            <div className={styles.bannerTextScrollDown}>
                                <FontAwesomeIcon icon={faMouse} color="white" />
                                <span>Scroll down</span>
                                <FontAwesomeIcon icon={faArrowDown} color="white" />
                            </div>
                        </div>
                        {/* avatar */}
                        <svg className={styles.image} viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                <image className={styles.imageMaskImage} x="12" href="../../assets/avatar.png" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className={clsx('section')}>
                    <div className={clsx('section__title')}>About</div>
                    <div className={clsx('section__subtitle')}>My Introduction</div>
                    <div className={styles.content}></div>
                </div>
                <div className={clsx('section')}>
                    <div className={clsx('section__title')}>About</div>
                    <div className={clsx('section__subtitle')}>My Introduction</div>
                    <div className={styles.content}></div>
                </div>
            </div>
        </div>
    );
}

export default Content;
