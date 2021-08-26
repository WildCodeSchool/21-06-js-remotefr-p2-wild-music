import React from 'react';
import Artist from './Artist';
import Slider from "react-slick";
import "./ArtistList.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

let artists = require('../../data/Artists');

function ArtistList() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "33.3vw",
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3800,
        pauseOnHover: true
      };
      
    return (

        <div className= "ArtistList">
             <h2>Artistes Populaires</h2>
            <div className="slide">
             <Slider {...settings}>

                {artists
                .map((artist) => (
                    <div key= {artist.id}>
                        <Artist artist={artist} />
                    </div>
                ))}
            </Slider>
            </div>
        </div>
    )
}

export default ArtistList