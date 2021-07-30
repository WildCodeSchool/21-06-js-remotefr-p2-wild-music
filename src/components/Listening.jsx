import React from 'react';
import { Link } from 'react-router-dom';
import './Listening.css';


function Listening({ playlist }) {
    return (
        <div className="Listening">
            <article className="listening-playlist">
                <a href={`https://openwhyd.org${playlist.url}`}>
                <img className="listening-img" src={`https://openwhyd.org${playlist.img}`} alt="playlist" />
                </a>
                <div className="listening-content">
                <Link to={{ pathname: `/${playlist.id}` }}>
                   <h2>{playlist.name}</h2>
                </Link> 
                   <span> Contenu : {playlist.nbTracks}</span>
                </div>
            </article>
        </div>
    )
}

export default Listening
