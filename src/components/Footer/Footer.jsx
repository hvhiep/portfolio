import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';

function Footer() {
	const bannerBtns = [
		{
			icon: faLinkedin,
			link: 'https://github.com/hvhiep'
		},
		{
			icon: faYoutube,
			link: 'https://github.com/hvhiep'
		},
		{
			icon: faGithub,
			link: 'https://github.com/hvhiep'
		}
	];
	return (
		<footer className={styles.wrapper}>
			<div className={styles.inner}>
				<div className={styles.title}>Hoang Van Hiep</div>
				<div className={styles.subtitle}>Frontend Developer</div>
				<div className={styles.bannerBtnWrapper}>
					{bannerBtns.map((item, index) => (
						<a
							key={`${item.link}_${index}}`}
							className={styles.bannerBtn}
							href={item.link}
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon
								icon={item.icon}
								color='white'
								size='1x'
							/>
						</a>
					))}
				</div>
				<div className={styles.copyright}>Copyright &copy; Hoang Van Hiep</div>
			</div>
		</footer>
	);
}

export default Footer;
