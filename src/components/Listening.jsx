import React from 'react';
// import { Link } from 'react-router';
import './Listening.css';


function Listening({ playlist }) {
    return (
        <div className="Listening">
            <article className="listening-playlist">
                <a href={`https://openwhyd.org${playlist.url}`}>
                <img className="listening-img" src={`https://openwhyd.org${playlist.img}`} alt="playlist" />
                </a>
                <div className="listening-title">
                   <h2>{playlist.name}</h2>
                  <div className="listening-content">
                   <span></span>
                   <span> Contenu : {playlist.nbTracks}</span>
                  </div>
                </div>
            </article>
        </div>
    )
}

export default Listening
