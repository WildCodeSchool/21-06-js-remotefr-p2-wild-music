import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
 
function GenreDetails(props) {
    const [genrePlay, setGenrePlay] = useState([]);
    const [genrePlay1, setGenrePlay1] = useState([]);
    const [genrePlay2, setGenrePlay2] = useState([]);
    // const [genreTracks, setGenreTracks] = useState();
    const genreID = props.match.params.genre;
 
    useEffect(() => {
        axios
        .get(`http://localhost:8000/musics/${genreID}`)
        .then((res) => {
        setGenrePlay(res.data.playlist);
        setGenrePlay1(res.data.playlist1);
        setGenrePlay2(res.data.playlist2)});
        // setGenreTracks(res.data.nbTracks)});
    }, [genreID])
 
    return (
        <div className="GenreDetails">
            <span className="Genre-play1">
            <Link to={genrePlay.url}>
                <img src={`https://openwhyd.org${genrePlay.img}`} alt="playlist" /></Link>
            </span>
            <span className="Genre-play1">
            <Link to={genrePlay1.url}>
                <img src={`https://openwhyd.org${genrePlay1.img}`} alt="playlist" /></Link>
            </span>
            <span className="Genre-play1">
            <Link to={genrePlay2.url}>
                <img src={`https://openwhyd.org${genrePlay2.img}`} alt="playlist" /></Link>
            </span>
        </div>
    )
}
 
export default GenreDetails
