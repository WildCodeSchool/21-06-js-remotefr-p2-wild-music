import React from 'react'

function Listening({ playlist }) {
    return (
        <div className="Listening">
            {/* <h1>{playlist.id}</h1> */}
            <img src={playlist.img} />
        </div>
    )
}

export default Listening
