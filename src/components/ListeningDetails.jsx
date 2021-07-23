import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListeningDetails(props) {
    const [playlistDetails, setPlaylistDetails] = useState();
    const playlistId = props.match.params.id;
    const policy = "https://cors-anywhere.herokuapp.com/";
    const url = (`https://openwhyd.org/adrien/playlist/${playlistId}?format=json`);
    const url2 = (`https://pokeapi.co/api/v2/pokemon/${playlistId}`);
    
    
    useEffect(() => {
        axios
        .get(policy+url)
        .then((res) => {
        setPlaylistDetails(res.data.name)}); 
    }, [playlistId])
    console.log(playlistId);
    console.log(playlistDetails);
    console.log(url)

    return (
        <div>
           <span>{playlistDetails}</span> 
        </div>
    )
}

export default ListeningDetails
