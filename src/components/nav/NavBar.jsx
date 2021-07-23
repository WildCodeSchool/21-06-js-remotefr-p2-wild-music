import React from 'react'
import logo from '../../images/WildMusic.png';
import { IoMdContact } from 'react-icons/io';
// import { HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './NavBar.scss';

function NavBar() {
	return (
		<div className="nav">
				<img id="logo" src={logo} alt='WildMusic-logo' />
				<Link id="title" to="/">WildMusic</Link>
			<div className="icon-nav">
			{/* <Link className="icon-link" to="/" >	
				<HiHome className="icon"/>
				</Link> */}
				<Link  className="icon-link" to="/contact" >	
				<IoMdContact className="icon"/>
				</Link>
			</div>
		</div>
	)
}

export default NavBar