import React, { useState } from 'react';
import './PlaylistCard.css'

import { TiHeartOutline, TiHeart } from 'react-icons/ti';

function PlaylistCard({style}) {
    const [isFavorite, setIsFavorite] = useState(false)
    const [favPlaylist, setFavPlaylist] = useState(0);

    const handleClick = () => {
        setIsFavorite(!isFavorite)
    }

    const addOnFav = () => {
        if(isFavorite === true) {
            setFavPlaylist( favPlaylist - 1)
        } else {
            setFavPlaylist( favPlaylist + 1 )
        }
    }

    const onClick = () => {
          handleClick();
          addOnFav();
      }
    // onRemove()
    // const addToFavorite = (style) => {
    //     setFavorite([...favorite, style]);
    // }

    return (
        <div className='PlaylistCard'>
            <div className='playlist-container'>
                <img src={style.img} alt={style.name} className="styleImg"/>
                <div className="card-content">
                    <h2 className='playlistTitle'>{style.name} </h2>
                    <div className='hoverText'>
                        <div className="btns">
                            <img src="https://lh3.googleusercontent.com/proxy/TGqrgWf1W7HY4UPK8Vh3VhK5cN5EtDoad4_E8Q1VUKqvcRBOiccK6d3QZdLZvaOzgXgKe6QMzUSHoPA2vDPLakdZ-hujPL8"
                            alt='playerBtn' className='playerBtn'/>
                        </div>
                        <div className="quote">
                            <p><em>{style.quote}</em></p>
                            <span>{style.quoteBy}</span>
                        </div>
                    </div>
                    <button className = "favBtn" 
                    onClick={onClick}> 
                        {isFavorite ? <TiHeart />  : <TiHeartOutline/>}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default PlaylistCard;