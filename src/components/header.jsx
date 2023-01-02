import React , { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/icon-192x192.png';
import Menu from '@components/Menu';




import styles from '@styles/Header.module.scss';



const Header = () => {

	const [toggle2,setToggle2] = useState(false);

	

	
	
	return (
	
		<nav className={styles.Nav}>
			<Image src={menu} alt="menu" className={styles.menu} ></Image>
			<div className={styles['navbar-left']}>
			<Link href="./"> 
				<Image src={logo} alt="logo" className={styles['nav-logo']} href="./"/>
				</Link>
				<ul>
					<li>
						<Link href="./">Perfil</Link>
					</li>
					<li>
						<Link href="./">Portafolio</Link>
					</li>
					
					<li>
						<Link href="./">Contacto</Link>
					</li>
				</ul>
				
			</div>
			<div className={styles['navbar-right']}>
				<ul>
					<button className={styles['navbar-shopping-cart']} onClick={() => setToggle2(!toggle2)}>
						<Image src={menu} alt="Menu"  />
					</button>
				</ul>
			</div>
			
			{toggle2 && <Menu />}
			
		</nav>

		
	);
};

export default Header;
