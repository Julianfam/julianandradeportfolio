import React , { useState } from 'react';
import styles from '@styles/Menu.module.scss';
import Link from 'next/link';
import Contact from './Contact';
import Image from 'next/image';

import Whatsapp from '../assets/icons/codeicon/64pxpng/001-whatsapp.png';
import Mail from '../assets/icons/codeicon/64pxpng/002-www.png';
import github from '../assets/icons/codeicon/64pxpng/003-github.png';


const Menu = () => {

	const [toggle4,setToggle4] = useState(false);

	return (
		<div className={styles.Menu}>
			<ul>
							
				<li> 
						<Link className="linkmenuicons" href="https://github.com/Julianfam" >Certifications <Image  className="contactmenuicons"  src={Mail} alt="Mail" width={16} height={16}></Image></Link>
			</li><li> 
						<Link className="linkmenuicons" href="https://github.com/Julianfam">My Github <Image className="contactmenuicons" src={github} alt="github"  width={16} height={16}></Image></Link>
						
				</li>
				<li>  
						<Link className="linkmenuicons" href="https://wa.me/573202502648" >My Whatsapp<Image className="contactmenuicons" src={Whatsapp} alt="whatsapp"  width={16} height={16}></Image></Link>
				</li>
				<li>
						<button className={styles.buttonContact} onClick={() => setToggle4(!toggle4)}>
						Send me a mail
					</button>
				</li>
			</ul>
			{toggle4 && <Contact />}
		</div>
	);
};

export default Menu;
