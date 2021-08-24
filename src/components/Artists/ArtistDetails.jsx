import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ArtistDetails.css';

function ArtistDetails(props) {
    const [artistName, setArtistName] = useState("");
    const [artistImage, setArtistImage] = useState("");
    const [artistDesc, setArtistDesc] = useState("");
    const [artistAge, setArtistAge] = useState("");
    const [artistSong, setArtistSong] = useState("");
    const [artistSong2, setArtistSong2] = useState("");
    const [artistSong3, setArtistSong3] = useState("");
    const [artistSong4, setArtistSong4] = useState("");
    const artistId = props.match.params.id;

    useEffect(() => {
        axios
          .get(`https://a.nacapi.com/wildapiartists/${artistId}`)
          .then((res) => {
            setArtistImage(res.data.image);
            setArtistName(res.data.name);            
            setArtistDesc(res.data.description);
            setArtistAge(res.data.age);
            setArtistSong(res.data.song);
            setArtistSong2(res.data.song2);
            setArtistSong3(res.data.song3);
            setArtistSong4(res.data.song4);

        
          })
      }, [artistId]);

    return (
        <div>
            <img src={artistImage} alt={artistName} />
            <p>{artistName}</p>
            <span>{artistAge} ans</span>
            <p>{artistDesc}</p>
            <iframe width="560" height="315" src={artistSong} allowfullscreen></iframe>
            <iframe width="560" height="315" src={artistSong2} allowfullscreen></iframe>
            <iframe width="560" height="315" src={artistSong3} allowfullscreen></iframe>
            <iframe width="560" height="315" src={artistSong4} allowfullscreen></iframe>

            <Link to={{pathname:'/'}}>Retour à la page accueil</Link>
        </div>
    )
}

export default ArtistDetails
