import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Artist from './Artist';
import './ArtistDetails.css';

let artists = require('../../data/Artists');

function ArtistDetails(props) {
    const [artistsFetch, setArtistsFetch] = useState([artists]);
    const artistId = props.match.params.id;
    useEffect(() => {
        axios
        .get(artists[`${artistId}`])
        .then((res) => res.data)
        .then((data) => setArtistsFetch(data))
    }, []);
    console.log(artists);
    return (
        <div>
            {artistsFetch.name}
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
