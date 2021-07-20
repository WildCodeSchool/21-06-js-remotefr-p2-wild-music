import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<div>
			<Link to="/" ></Link>
			<Link to="/playlist-songs" ></Link>
			<Link to="/contact" ></Link>
		</div>
	)
}

export default NavBar
