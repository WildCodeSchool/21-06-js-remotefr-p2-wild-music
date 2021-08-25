import React from 'react';
import GenreList from './GenreList';
import ArtistList from '../components/Artists/ArtistList';


function Home() {
	return (
		<div>
			<GenreList />
			<ArtistList />
		</div>
	)
}

export default Home;