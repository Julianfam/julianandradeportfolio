import React , { useState , useRef} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import menu from '@icons/001-menu.png';
import logo from '@logos/icon-192x192.png';
import Menu from '@components/Menu';

import Whatsapp from '../assets/icons/SocialMedia/007-whatsapp-1.png';
import github from '../assets/icons/codeicon/004-github.png';
import styles from '@styles/Header.module.scss';

import useOutsideClick from '@hooks/useOutsideClick';

const Header = () => {


	const [toggle2,setToggle2] = useState(false);
	const ref = useRef();

	useOutsideClick(ref, ()=>{
		if (toggle2) setToggle2(false);
	});

	return (
	
		<nav className={styles.Nav}>
			<Image src={menu} alt="menu" className={styles.menu} ></Image>
			<div className={styles['navbar-left']}>
			<Link href="./"> 
				<Image src={logo} alt="logo" className={styles['nav-logo']} href="./"/>
				</Link>
				<ul>
					<li>
						<Link href="/ProyectCardContainer">My Proyects</Link>
					</li>
					<li>
						<Link href="/DiplomaContainer">My Diplomas</Link>
					</li>
					<li>
						<Link href="/cheatlist">Cheat List</Link>
					</li>					
					<li>
						<Link href="https://wa.me/573202502648"><Image className="contactmenuicons" src={Whatsapp} alt="whatsapp" width={16} height={16}></Image></Link>
						<Link href="https://github.com/Julianfam"><Image className="contactmenuicons" src={github} alt="github" width={16} height={16}></Image></Link>
					</li>
				</ul>
			</div>
			<div className={styles['navbar-right']}>
				<ul>
					<button className={styles['navbar-shopping-cart']} 
					onClick={() => setToggle2(!toggle2)} >
						<Image src={menu} alt="Menu" width={30} height={30} />
					</button>
				</ul>
			</div>
				
				{toggle2 && <Menu ref={ref}/>}
				
		</nav>
	);
};

export default Header;
