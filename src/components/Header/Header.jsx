import React from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';

function Header({headerColorActive}) {
	const handleNavClick = event => {
		event.preventDefault();
		const elementName = event.target.innerText.toLowerCase();
		const destinationElement = document.getElementById(elementName);
		const headerElement = document.getElementById('header');
		window.scrollTo(0, destinationElement.offsetTop - headerElement.offsetHeight);
	};

	return (
		<header
			id='header'
			className={clsx(styles.wrapper, headerColorActive && styles.active)}
		>
			<div className={styles.inner}>
				<h1>
					<a
						className={styles.logo}
						href='#home'
						onClick={handleNavClick}
					>
						My Portfolio
					</a>
				</h1>
				<nav className={styles.nav}>
					<a
						className={styles.nav__link}
						href='#home'
						onClick={handleNavClick}
					>
						Home
					</a>
					<a
						className={styles.nav__link}
						href='#education'
						onClick={handleNavClick}
					>
						Education
					</a>
					<a
						className={styles.nav__link}
						href='#skills'
						onClick={handleNavClick}
					>
						Skills
					</a>
					<a
						className={styles.nav__link}
						href='#projects'
						onClick={handleNavClick}
					>
						Projects
					</a>
					<a
						className={styles.nav__link}
						href='#contactme'
						onClick={handleNavClick}
					>
						ContactMe
					</a>
				</nav>
			</div>
		</header>
	);
}

export default Header;
