import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListeningDetails(props) {
    const [playlistDetails, setPlaylistDetails] = useState();
    const [playlistImages, setPlaylistImages] = useState();
    const playlistId = props.match.params.id;
 
    useEffect(() => {
        axios
        .get(`http://localhost:8000/musics/${playlistId}`)
        .then((res) => {
        setPlaylistDetails(res.data.id)
        setPlaylistImages(res.data.img)}); 
    }, [playlistId])

    return (
        <div>
           <span>{playlistDetails}</span>
           <img src={`https://openwhyd.org${playlistImages}`} alt="playlist" />
           <Link to={{pathname: '/'}}>Home</Link>
        </div>
    )
}

export default ListeningDetails
