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
            <h1 className="genre-quote">{quotePlay}</h1>
            <span className="genre-play1">
            <a href={genrePlay.url}>
                <img className="img-play1" src={genrePlay.img} alt="playlist" />
            </a>
            </span>
            <span className="genre-play2">
            <a href={genrePlay1.url}>
                <img className="img-play2" src={genrePlay1.img} alt="playlist" />
            </a>
            </span>
            <span className="genre-play3">
            <a href={genrePlay2.url}>
                <img className="img-play2" src={genrePlay2.img} alt="playlist" />
            </a>
            </span>
        </div>
    )
}
 
export default GenreDetails
