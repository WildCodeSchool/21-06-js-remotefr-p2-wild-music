import React, {useState} from 'react';
import PlaylistCard from './PlaylistCard';
import './StyleList.css'
let styles = require('../../data/styles')

function StyleList() {
    const [favPlaylist, setFavPlaylist] = useState([]);

    // const addOnFav = (style) => {
    //     const exist = favPlaylist.find((x) => x.id === style.id);
    //     if (exist) {
    //       setFavPlaylist(
    //         favPlaylist.map((x) =>
    //           x.id === style.id ? { ...exist, qty: exist.qty + 1 } : x
    //         )
    //       );
    //     } else {
    //        setFavPlaylist([...favPlaylist, { ...style, qty: 1 }]);
    //     }
    // };

    return (
        <div className="StyleList">
            <button>cart</button>
            <div className="style-container">
                {styles
                .map((style) => (
                    <div key={style.id}>
                        <PlaylistCard style={style}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StyleList;