import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import GenreList from '../../pages/GenreList';
import "./GenreCard.css"

import { TiHeartOutline, TiHeart } from 'react-icons/ti';

import './GenreCard.css';

function GenreCard({ genre }) {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleClick = () => {
        setIsFavorite(!isFavorite)
    }

    const onClick = () => {
        handleClick();
        //   onAdd();       , onAdd 
    }

    return (
        <div className='GenreCard'>
            <div className='playlist-container'>
                <img src={genre.img_card} alt={genre.genre} className="styleImg"/>
                <div className="card-content">
                    <h2 className='playlistTitle'>{genre.genre}</h2>
                    <div className='hoverText'>
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
            <button className = "favBtn" 
                onClick={onClick}> 
                {isFavorite ? <TiHeart />  : <TiHeartOutline/>}
            </button>
        </div>
    )
};

export default GenreCard;