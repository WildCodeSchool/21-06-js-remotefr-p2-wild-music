import React from 'react';
import Artist from './Artist';
import "./ArtistList.css";
let artists = require('../../data/Artists');

function ArtistList() {
    return (
        <div className= "ArtistList">
            <h2>Artistes Populaires</h2>
            <div className= "artist-container">
                {artists
                .map((artist) => (
                    <div key= {artist.id}>
                        <Artist artist={artist} />
                    </div>
                ))
                }

            </div>
            
        </div>
    )
}

export default ArtistList
