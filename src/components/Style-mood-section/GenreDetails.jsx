import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./GenreDetails.css";
 
function GenreDetails(props) {
    const [genrePlay, setGenrePlay] = useState([]);
    const [genrePlay1, setGenrePlay1] = useState([]);
    const [genrePlay2, setGenrePlay2] = useState([]);
    // const [genreTracks, setGenreTracks] = useState([]);
    const [quotePlay, setQuotePlay] = useState();
    const genreID = props.match.params.genre;
 
    useEffect(() => {
        axios
        .get(`http://localhost:8000/musics/${genreID}`)
        .then((res) => {
        setGenrePlay(res.data.playlist);
        setGenrePlay1(res.data.playlist1);
        setGenrePlay2(res.data.playlist2);
        setQuotePlay(res.data.quotePlay)});
        // setGenreTracks(res.data.nbTracks)});
    }, [genreID])
 
    return (
        <div className="GenreDetails">
          <div className="GenreDetails-container">
            <div className="genre-quote">
            <h1>{quotePlay}</h1>
            </div>
            <div className="genre-play">
            <a href={genrePlay.url}>
                <img className="img-play" src={genrePlay.img} alt="playlist" />
                <img src="https://img.icons8.com/material/48/000000/play-button-circled--v4.png" alt='playBtn' className='playBtn'/> 
            </a>
            <a href={genrePlay1.url}>
                <img className="img-play" src={genrePlay1.img} alt="playlist" />
                <img src="https://img.icons8.com/material/48/000000/play-button-circled--v4.png" alt='playBtn' className='playBtn'/> 
            </a>
            <a href={genrePlay2.url}>
                <img className="img-play" src={genrePlay2.img} alt="playlist" />
                <img src="https://img.icons8.com/material/48/000000/play-button-circled--v4.png" alt='playBtn' className='playBtn'/> 
            </a>
            </div>
          </div>
        </div>
    )
}
 
export default GenreDetails
