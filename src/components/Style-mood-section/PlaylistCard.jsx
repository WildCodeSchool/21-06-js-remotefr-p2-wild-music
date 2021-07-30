import React from 'react';
import './PlaylistCard.css'
import { Link } from 'react-router-dom';

function PlaylistCard({style}) {
    return (
        <div className='PlaylistCard'>
            
            <div className='playlist-container'>
                <img src={style.img} alt={style.name} className="styleImg"/>
                <div className="card-content">
                    <h2 className='playlistTitle'>{style.name}</h2>
                    
                    <div className='quote'>
                    <Link to={{ pathname: '/:id' }}>
                        <img src="https://img.icons8.com/material/48/000000/play-button-circled--v4.png" alt='playerBtn' className='playerBtn'/>
                        <p><em>{style.quote}</em></p>
                        <span>{style.quoteBy}</span>
                    </Link> */
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PlaylistCard;