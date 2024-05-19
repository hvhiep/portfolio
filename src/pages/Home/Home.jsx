import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import styles from './Home.module.scss';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

function Home() {
	const [isScroll, setIsScroll] = useState(false);

	const scrollCheck = () => {
		if (window.scrollY >= 70) {
			setIsScroll(true);
		} else setIsScroll(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollCheck);
		console.log('re-render');

		return () => window.removeEventListener('scroll', scrollCheck);
	}, []);

	const handleScrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div>
			<Header headerColorActive={isScroll} />
			<Content />
			<Footer />
			{isScroll ? (
				<button
					type='button'
					title=''
					className={styles.scrollToTopBtn}
					onClick={handleScrollToTop}
				>
					<FontAwesomeIcon
						className={styles.scrollToTopBtnIcon}
						icon={faArrowUp}
						size='2x'
					/>
				</button>
			) : null}
		</div>
	);
}

export default Home;
