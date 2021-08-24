import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function GenreDetails(props) {
    const [genreName, setGenreName] = useState();
    const genreID = props.match.params.genre;

    useEffect(() => {
        axios
        .get(`https://a.nacapi.com/wildapigenre/${genreID}`)
        .then((res) => {
        setGenreName(res.data.name)});
    }, [genreID])

    return (
        <div>
            <span>{genreName}</span>
            <Link to={{pathname: '/'}}>Home</Link>
        </div>
    )
}

export default GenreDetails
