import React, { useState, useEffect} from 'react';
import axios from 'axios';
import GenreCard from '../components/Style-mood-section/GenreCard';

function GenreList() {
    const [genres, setGenres] = useState([]);
    
    useEffect(() => {
        axios
        .get("https://a.nacapi.com/wildapigenre")
        .then((res) => res.data)
        .then((data) => setGenres(data))
    }, [])

    return(
        <div className="Genres">
            {genres
            .map((genre) => 
                <div key={genre.id}>
                    <GenreCard genre={genre} />
                </div>)} 
        </div>
    )
}

export default GenreList;