import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Listening from './Listening'


function ListeningList() {
    const [playlists, setPlaylists] = useState([]);
    useEffect(() => {
        axios
        .get("https://openwhyd.org/adrien/playlists?format=json")
        .then((res) => res.data)
        .then((data) => setPlaylists(data))
    }, [])
    console.log(playlists)
    return (
        <div className="PlayList">
           {playlists
           .map((playlist, index) => 
                <div key={playlist.index}>
                    <Listening playlist={playlist} />
                </div>)} 
        </div>
    )
}

export default ListeningList
