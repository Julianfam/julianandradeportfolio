import React , { useState , useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_castell.svg';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';



import styles from '@styles/Header.module.scss';


const Header = () => {
	const [toggle,setToggle] = useState(false);
	const [toggle2,setToggle2] = useState(false);
	const [toggle3,setToggle3] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle  = () => {
		setToggle(!toggle);
	};
	const handleToggle3  = () => {
		setToggle3(!toggle3);
	};
	
	return (
	
		<nav className={styles.Nav}>
			<Image src={menu} alt="menu" className={styles.menu} ></Image>
			<div className={styles['navbar-left']}>
			<Link href="./"> 
				<Image src={logo} alt="logo" className={styles['nav-logo']} href="./"/>
				</Link>
				<ul>
					<li>
						<Link href="./">Sobre nosotros</Link>
					</li>
					<li>
						<Link href="./">Clientes</Link>
					</li>
					
					<li>
						<Link href="./">Contacto</Link>
					</li>
				</ul>
				
			</div>
			<div className={styles['navbar-right']}>
				<ul>
					<button className={styles['navbar-shopping-cart']} onClick={() => setToggle2(!toggle2)}>
						<Image src={menu} alt="shopping cart"  />
					</button>
				</ul>
			</div>
			
			{toggle2 && <Menu />}
			
		</nav>

		
	);
};

export default Header;
