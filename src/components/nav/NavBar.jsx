import React, {useState, useContext} from 'react';
import logo from '../../images/WildMusic.png';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TiHeartOutline, TiHeart } from 'react-icons/ti';
import FavContext from "../context/cart/FavContext";
import './NavBar.scss';

function NavBar() {
	const { cartItems, showHideCart } = useContext(FavContext);
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
				<div className='favoritesList'>
					<span 
						onClick={showHideCart} 
						aria-hidden='true'>
						<TiHeartOutline/>
						Favoris
					</span>
					{cartItems.length > 0 && (
					<div className='item__count'>
						<span>{cartItems.length}</span>
					</div>
          			)}
				</div>
			<Link className="icon-link" to="/contact" >	
				<FiMail className="icon"/>
				</Link>
				<Link  id="contact-link" to="/contact">contact
				</Link>
			</div>
		</div>
	)
}

export default NavBar
