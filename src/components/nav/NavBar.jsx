import React, {useState} from 'react';
import logo from '../../images/WildMusic.png';
// import { IoMdContact } from 'react-icons/io';
// import { HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
	const [navbar, setNavbar] = useState(false);

	const changeBackround = () => {
		if (window.scrollY >= 120) {
		 setNavbar(true);
	 	}
		else {
		setNavbar(false);
		}
	}
	window.addEventListener('scroll', changeBackround);

	return (
		<div className={navbar ? 'navbar active' : 'navbar'}>
				<img id="logo" src={logo} alt='WildMusic-logo' />
				<Link id="title" to="/">WildMusic</Link>
			<div className="contact">
			{/* <Link className="icon-link" to="/" >	
				<HiHome className="icon"/>
				</Link> */}
				<Link  id="contact-link" to="/contact">Contact
				{/* <IoMdContact className="icon"/> */}
				</Link>
			</div>
		</div>
	)
}

export default NavBar