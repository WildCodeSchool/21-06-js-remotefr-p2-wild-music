import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Listening from '../components/Listening'
import './ListeningList.css';
import PlaylistCard from '../components/Style-mood-section/GenreCard';


function ListeningList() {
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
        axios
        .get("https://a.nacapi.com/wildapigenre")
        .then((res) => res.data)
        .then((data) => setPlaylists(data))
    }, [])
    console.log(playlists)
    return (
        <div className="PlayList">
           {playlists
           .map((playlist) => 
                <div key={playlist.id}>
                    <Listening playlist={playlist} />
                    {/* <PlaylistCard playlist={playlist} /> */}
                </div>)} 
        </div>
    )
}

export default ListeningList
