import React from "react";
import { Link } from 'react-router-dom';
import './Artist.css';


function Artist({artist}) {
    return (
        <div className= "Artist">            
            <article className= "artist-card">            
                <div className= "img-container">
                <Link className="link-name" to={{ pathname: `/artist/${artist.id}`}}>
                <div className= "artist-card-content">
                
                    <h2>{artist.name}</h2>
                   
                </div>
                </Link>
                <div>
                <Link to={{ pathname: `/artist/${artist.id}`}}>
                <img className= "artist-img" src={artist.image} alt={artist.name} />
                </Link>
                </div>
                
                </div>
               
            </article>            
        </div>
    )
}

export default Artist