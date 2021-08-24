import React, {useState} from 'react';
import PlaylistCard from './PlaylistCard';
import './StyleList.css'
const styles = require('../../data/styles')

function StyleList() {

    const [favPlaylist, setFavPlaylist] = useState([]);

    const onAdd = (style) => {

        const exist = favPlaylist.find((x) => x.id === style.id);
        if (exist) {
          setFavPlaylist(
            favPlaylist.map((x) =>
              x.id === style.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
           setFavPlaylist([...favPlaylist, { ...style, qty: 1 }]);
        }
    };

    // const onRemove = (styles) => {
    //     const exist = favPlaylist.find((x) => x.id === styles.id);
    //     if (exist.qty === 1) {
    //         setFavPlaylist(favPlaylist.filter((x) => x.id !== styles.id));
    //     } else {
    //         setFavPlaylist(
    //             favPlaylist.map((x) =>
    //             x.id === styles.id ? { ...exist, qty: exist.qty - 1 } : x
    //         )
    //       );
    //     }
    //   };onRemove={onRemove}

    return (
        <div className="StyleList">
            <div>

                Cart { ' '}
                {favPlaylist.length ? (
                    <button>{favPlaylist.length}</button>
                ) : (
                    ' '
                )}
            </div>
            <div className="style-container">
                {styles
                .map((style) => (
                    <div key={style.id}>
                        <PlaylistCard style={style} onAdd={onAdd} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StyleList;