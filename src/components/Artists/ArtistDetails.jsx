import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ArtistDetails.css';

function ArtistDetails(props) {
    const [artistName, setArtistName] = useState("");
    const [artistImage, setArtistImage] = useState("");
    const [artistDesc, setArtistDesc] = useState("");
    const [artistAge, setArtistAge] = useState();
    const artistId = props.match.params.id;

    useEffect(() => {
        axios
          .get(`https://a.nacapi.com/wildapiartists/${artistId}`)
          .then((res) => {
            setArtistName(res.data.name);
            setArtistImage(res.data.image);
        
          })
      }, [artistId]);

    return (
        <div>
            <p>{artistName}</p>
            <img src={artistImage} alt={artistName} />
            {/* {artistsFetch
            .map((artist) => (
                <div key= {artist.id}>
            <div className='detail-card'>
            <img className='ArtistImg' src={artist.image} alt={artist.name} />
            <div className='ArtistContent'>
                <h2 className='ArtistName'>{artist.name}</h2>
                <span className='ArtistAge'>Age : {artist.age}</span>
                <p className='ArtistDescription'>Description : {artist.description}</p>
            </div>
            </div>
                </div>
            ))}
            <Link to={{pathname:'/Home'}}>Retour à la page accueil</Link> */}
        </div>
    )
}

export default ArtistDetails
