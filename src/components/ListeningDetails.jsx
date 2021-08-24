import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListeningDetails(props) {
    const [playlistDetails, setPlaylistDetails] = useState();
    const [playlistImages, setPlaylistImages] = useState();
    const playlistGenre = props.match.params.genre;
 
    useEffect(() => {
        axios
        .get(`http://localhost:8000/musics/${playlistGenre}`)
        .then((res) => {
        setPlaylistDetails(res.data.genre)
        setPlaylistImages(res.data.img)}); 
    }, [playlistGenre])

    return (
        <div>
           <span>{playlistDetails}</span>
           <img src={`https://openwhyd.org${playlistImages}`} alt="playlist" />
           <Link to={{pathname: '/'}}>Home</Link>
        </div>
    )
}

export default ListeningDetails
