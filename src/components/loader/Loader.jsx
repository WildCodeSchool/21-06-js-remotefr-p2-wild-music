import React from 'react'
import logo from './Logo Wild Music.png'
import './Loader.css'

function Loader() {
	return (
		<div className="loadingPage">
			<img src={logo}  alt="logoWD" className="spinnerlogo bounce"/>
			<div className="loadingContainer">
			<div className="shadow bounce2"></div>
			<div class="spinner"></div>
			</div>
		</div>
	)
}

export default Loader
