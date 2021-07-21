import React from 'react';
import Artist from './Artist';
import "./ArtistList.css";
let artists = require('../../data/Artists');

function ArtistList() {
    return (
        <div className= "ArtistList">
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
