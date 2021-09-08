import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHome } from 'react-icons/fa';
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
      let iconStyles = {color: "#f7d9b4", fontSize: "1.5em", marginBottom: "-60px"}
    return (
        <div className="container-artist">
          <div className="container-img">
            <img className="img-artist" src={artistImage} alt={artistName} />
          </div>
          <div className="text-artist">
            <p className="name-artist">{artistName}</p>
            <span className="age-artist">{artistAge} ans</span>
            <p className="desc-artist">{artistDesc}</p>
          </div>
          <div className="videos">
          <div className="corner-wrapper">
            <iframe className="song1" width="560" height="315" frameBorder="0" src={artistSong} allowfullscreen></iframe>
          </div>
          <div className="corner-wrapper">
            <iframe className="song2" width="560" height="315" frameBorder="0" src={artistSong2} allowfullscreen></iframe>
          </div>
          <div className="corner-wrapper">
            <iframe className="song3" width="560" height="315" frameBorder="0" src={artistSong3} allowfullscreen></iframe>
          </div>
          <div className="corner-wrapper">
            <iframe className="song4" width="560" height="315" frameBorder="0" src={artistSong4} allowfullscreen></iframe>
          </div>
          </div>
          
            <Link to={{pathname:'/'}}><FaHome style={iconStyles}/></Link>
        </div>
    )
}

export default ArtistDetails
