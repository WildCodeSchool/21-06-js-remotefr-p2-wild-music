import React from 'react';
import './Artist.css';


function Artist({artist}) {
    return (
        <div className= "Artist">
            <article className= "artist-card">
                <div className= "img-container">
                <img className= "artist-img" src={artist.image} alt={artist.name} />
                </div>
                <div className= "artist-card-content">
                    <h2>{artist.name}</h2>
                </div>
            </article>
        </div>
    )
}

export default Artist
