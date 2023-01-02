import React , { useState , useContext } from 'react';
import styles from '@styles/Menu.module.scss';
import Link from 'next/link';
import Contact from './Contact';

const Menu = () => {

	const [toggle4,setToggle4] = useState(false);

	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<Link className="title" href="./">Perfil</Link>
				</li>
				<li>
					<Link href="./">Portafolio</Link>
				</li>
				<li>
						<button className={styles.buttonContact} onClick={() => setToggle4(!toggle4)}>
						Enviame un mail
					</button>
				</li>
			</ul>
			{toggle4 && <Contact />}
		</div>
	);
};

export default Menu;
