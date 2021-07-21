import React from 'react'

import './PlaylistCard.css'

function PlaylistCard({style}) {
    return (
        <div className='PlaylistCard'>
            
            <div className='playlist-container'>
                <img src={style.img} alt={style.name}/>
                <div className="card-content">
                    <h2>{style.name}</h2>
                    <p className='quote' ><em>{style.quote}</em></p>
                    <span className='quote'>{style.quoteBy}</span>
                </div>
            </div>
        </div>
    )
};

export default PlaylistCard;
