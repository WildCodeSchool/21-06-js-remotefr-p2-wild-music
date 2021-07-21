import React from 'react';
import './Artist.css';


function Artist({artist}) {
    return (
        <div className= "Artist">
            <article className= "artist-card">
                <img src={artist.image} alt={artist.name} />
                <h2 className= "artiste-name">{artist.name}</h2>
            </article>
        </div>
    )
}

export default Artist
