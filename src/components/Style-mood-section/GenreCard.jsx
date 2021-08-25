import React from 'react';
import { Link } from 'react-router-dom';
// import GenreList from '../../pages/GenreList';
import "./GenreCard.css"


function GenreCard({genre }) {
    return (
        <div className='GenreCard'>
            <div className='playlist-container'>
                <img src={genre.img_card} alt={genre.genre} className="styleImg"/>
                <div className="card-content">
                    <h2 className='playlistTitle'>{genre.genre}</h2>
                    
                    <div className='quote'>
                        <Link to={{ pathname: `/musics/${genre.genre}` }}>
                        <img src="https://img.icons8.com/material/48/000000/play-button-circled--v4.png" alt='playerBtn' className='playerBtn'/>
                        </Link>
                        <p><em>{genre.quote}</em></p>
                        <span>{genre.quoteBy}</span>                
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GenreCard;