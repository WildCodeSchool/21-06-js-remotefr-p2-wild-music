import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Listening from './Listening'


function ListeningList() {
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
        axios
        .get("https://openwhyd.org/adrien/playlist/")
        .then((res) => res.data)
        .then((data) => setPlaylists(data))
    }, [])
    return (
        <div className="PlayList">
           {playlists
           .map((playlist) => 
                <div key={playlist.id}>
                    <Listening playlist={playlist} />
                </div>)} 
        </div>
    )
}

export default ListeningList
