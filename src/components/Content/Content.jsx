import React, {useCallback} from 'react';
import clsx from 'clsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons';
import {
	faMouse,
	faArrowDown,
	faPaperPlane,
	faCertificate,
	faUserGroup,
	faGears,
	faStar,
	faVideo,
	faDownload,
	faPhone,
	faEnvelope,
	faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import styles from './Content.module.scss';

function Content() {
	const bannerBtns = [
		{
			icon: faLinkedin,
			link: 'https://github.com/hvhiep'
		},
		{
			icon: faYoutube,
			link: 'https://www.youtube.com/watch?v=Qy9q5eeDPuw'
		},
		{
			icon: faGithub,
			link: 'https://github.com/hvhiep'
		}
	];
	const skills = [
		{
			url: './assets/html.png',
			title: 'HTML'
		},
		{
			url: './assets/css.png',
			title: 'CSS'
		},
		{
			url: './assets/javascript.png',
			title: 'Javascript'
		},
		{
			url: './assets/reactjs.png',
			title: 'ReactJS'
		},
		{
			url: './assets/reactnative.png',
			title: 'React Native'
		},
		{
			url: './assets/firebase.png',
			title: 'Firebase'
		},
		{
			url: './assets/github.png',
			title: 'Github'
		},
		{
			url: './assets/figma.png',
			title: 'Figma'
		}
	];

	const projects = [
		{
			timeline: '18/04/2022 - 14/07/2022',
			name: 'Gita',
			desc: 'Online guitar buying and selling application',
			images: [
				'./assets/phone/gita1.png',
				'./assets/phone/gita2.png',
				'./assets/phone/gita3.png',
				'./assets/phone/gita4.png'
			],
			member: '1 (Individual project)',
			technologies: 'React Native, Firebase (Firestore, Authentication, Storage)',
			features: [
				'Sign up, sign in with Firebase Authentication',
				'Search for guitars by name, discount, quantity sale',
				'Set order and track order status (Buyer)',
				'Product management, order confirmation (Seller)',
				'Statistics of revenue and profit (Seller)'
			],
			githubURL: 'https://github.com/hvhiep/Gita',
			demoURL: 'https://youtu.be/Qy9q5eeDPuw'
		},
		{
			timeline: '19/10/2021  -  18/12/2021',
			name: 'Kalos',
			desc: 'Home exercise app',
			images: [
				'./assets/phone/kalos1.png',
				'./assets/phone/kalos2.png',
				'./assets/phone/kalos3.png',
				'./assets/phone/kalos4.png'
			],
			member: '4 (subject project)',
			technologies: 'React Native, MongoDB',
			features: [
				'Sign up/Login with MongoDB',
				'Manage exercise schedule',
				'Manage video tutorials, favorite exercises',
				'Manage exercise parameters (BMI, height, weight)',
				'Manage assignments (search, filter by group)'
			],
			githubURL: 'https://github.com/hvhiep/Kalos',
			demoURL: ''
		}
	];

	const Button = useCallback(props => {
		const {title, icon, link, download} = props || {};

		return (
			<a
				className='btnLink'
				href={link}
				target={link.includes('#') ? '_self' : '_blank'}
				rel='noreferrer'
				download={download}
			>
				<div>
					<span>{title}</span>
					<FontAwesomeIcon icon={icon} />
				</div>
			</a>
		);
	}, []);

	const ProjectItem = useCallback(({item}) => {
		return (
			<div
				key={item.name}
				className={styles.project__item}
			>
				<h4 className={styles.project__itemTimeline}>{item.timeline}</h4>
				<div>
					{/* left content */}
					<div className={styles.project__itemLeftWrapper}>
						{/* image list */}
						{item.images.map(url => (
							<img
								key={url}
								src={url}
								alt='project img'
							/>
						))}
					</div>
					{/* right content */}
					<div className={styles.project__itemRightWrapper}>
						<div className={styles.stickyContent}>
							<h1>{item.name}</h1>
							<h4>{item.desc}</h4>
							<div className={styles.project__itemRightTextGroup}>
								<FontAwesomeIcon
									className={styles.project__itemTextIcon}
									icon={faUserGroup}
								/>
								<span>
									<span className={styles.bold}>Member:</span> {item.member}
								</span>
							</div>
							<div className={styles.project__itemRightTextGroup}>
								<FontAwesomeIcon
									className={styles.project__itemTextIcon}
									icon={faGears}
								/>
								<span>
									<span className={styles.bold}>Technology:</span> {item.technologies}
								</span>
							</div>
							<ul>
								<FontAwesomeIcon
									className={styles.project__itemTextIcon}
									icon={faStar}
								/>
								<span className={styles.bold}>Feature: </span>
								{item.features.map(feature => {
									return (
										<li key={feature}>
											<span>{feature}</span>
										</li>
									);
								})}
							</ul>
							<div className={styles.project__itemBtnWrapper}>
								<Button
									title='Github'
									icon={faGithub}
									link={item.githubURL}
								/>

								{item.demoURL ? (
									<Button
										title='Demo'
										icon={faVideo}
										link={item.demoURL}
									/>
								) : null}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<div
					id='home'
					className={clsx('section', styles.banner)}
				>
					<div className={styles.bannerBtnWrapper}>
						{bannerBtns.map((item, index) => (
							<a
								key={index}
								className={styles.bannerBtn}
								href={item.link}
								target='_blank'
								rel='noreferrer'
							>
								<FontAwesomeIcon
									icon={item.icon}
									color='white'
									size='2x'
								/>
							</a>
						))}
					</div>
					<div className={styles.bannerContent}>
						{/* first introduction */}
						<div className={styles.bannerTextWrapper}>
							<div>
								<h1>Hi, I'm Hiep</h1>
								<h1>Frontend Developer</h1>
								<span>Fresh level experience in web and mobile development</span>
								<div>
									<Button
										title='Contact Me'
										icon={faPaperPlane}
										link='#contactme'
									/>
									<Button
										title='Download CV'
										icon={faDownload}
										link='./assets/cv.pdf'
										download
									/>
								</div>
							</div>
							<div className={styles.bannerTextScrollDown}>
								<FontAwesomeIcon
									className={styles.scrollDownIcon}
									icon={faMouse}
								/>
								<span>Scroll down</span>
								<FontAwesomeIcon
									className={styles.scrollDownIcon}
									icon={faArrowDown}
									color='white'
								/>
							</div>
						</div>
						{/* avatar */}
						<svg
							className={styles.image}
							viewBox='0 0 200 187'
							xmlns='http://www.w3.org/2000/svg'
						>
							<mask
								id='mask0'
								mask-type='alpha'
							>
								<path d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z' />
							</mask>
							<g mask='url(#mask0)'>
								<path d='M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z' />
								<image
									className={styles.imageMaskImage}
									x='12'
									href='../../assets/avatar.png'
								/>
							</g>
						</svg>
					</div>
				</div>
				<div
					id='education'
					className={clsx('section')}
				>
					<div className={clsx('section__title')}>Education</div>
					<div className={clsx('section__subtitle')}>My personal journey</div>
					<div className={clsx(styles.content, styles.education)}>
						<div className={styles.education__imageWrapper}>
							<img
								src='./assets/uit.jpg'
								alt='university'
							/>
						</div>
						<div className={styles.education__textWrapper}>
							<span>27/08/2018 - NOW</span>
							<h3>UNIVERSITY OF INFORMATION TECHNOLOGY</h3>
							<h4>Major: Information Technology</h4>
							<span>GPA: 8.09/10</span>
							{/* awards */}
							<div className={styles.education__awardWrapper}>
								<div>
									<FontAwesomeIcon
										icon={faCertificate}
										color='white'
									/>
									<h3>Awards</h3>
								</div>
								<span>UIT academic encouraging Scholarship in 1st semester 2021-2022</span>
							</div>
						</div>
					</div>
				</div>
				<div
					id='skills'
					className={clsx('section')}
				>
					<div className={clsx('section__title')}>Skills</div>
					<div className={clsx('section__subtitle')}>My speciality</div>
					<div className={styles.content}>
						<div className={styles.skillWrapper}>
							{skills.map((item, index) => {
								return (
									<div
										key={index}
										className={styles.skillItem}
									>
										<img
											src={item.url}
											alt='skill'
										/>
										<span>{item.title}</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div
					id='projects'
					className={clsx('section')}
				>
					<div className={clsx('section__title')}>Projects</div>
					<div className={clsx('section__subtitle')}>Most recent work</div>
					<div className={clsx(styles.content, styles.projectWrapper)}>
						{/* project list */}
						{projects.map(item => (
							<ProjectItem
								key={item.name}
								item={item}
							/>
						))}
					</div>
				</div>
				<div
					id='contactme'
					className={clsx('section')}
				>
					<div className={clsx('section__title')}>Contact Me</div>
					<div className={clsx('section__subtitle')}>Get in touch</div>
					<div className={clsx(styles.content, styles.contactWrapper)}>
						<div className={styles.contact__item}>
							<FontAwesomeIcon
								className={styles.contact__itemIcon}
								icon={faPhone}
								size='2x'
							/>
							<div className={styles.contact__itemTextTitle}>Call Me</div>
							<div>0356562378</div>
						</div>
						<div className={styles.contact__item}>
							<FontAwesomeIcon
								className={styles.contact__itemIcon}
								icon={faEnvelope}
								size='2x'
							/>
							<div className={styles.contact__itemTextTitle}>Email</div>
							<div>hvhiep14.8@gmail.com</div>
						</div>
						<div className={styles.contact__item}>
							<FontAwesomeIcon
								className={styles.contact__itemIcon}
								icon={faLocationDot}
								size='2x'
							/>
							<div className={styles.contact__itemTextTitle}>Location</div>
							<div>Tp. Ho Chi Minh</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
