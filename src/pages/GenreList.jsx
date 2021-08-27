import React, { useState, useEffect} from 'react';
import GenreCard from '../components/Style-mood-section/GenreCard';
import Fav from '../components/Fav/Fav'
import axios from 'axios';
import "./GenreList.css";

 
 
function GenreList() {
    const [genres, setGenres] = useState([]);
 
    useEffect(() => {
        axios
        .get("http://localhost:8000/musics/")
        .then((res) => res.data)
        .then((data) => setGenres(data))
    }, [])
 
    return(
        <div className="Genres">
            <div className="genres-container">
            {genres
            .map((genre) => 
                <div key={genre.id}>
                    <Fav genre={genre}/>
                    <GenreCard genre={genre}/>
                </div>)}
            </div> 
        </div>
    )
}
 
export default GenreList;