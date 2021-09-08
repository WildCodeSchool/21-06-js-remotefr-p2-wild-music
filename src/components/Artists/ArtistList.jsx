import React from 'react';
import Artist from './Artist';
import Slider from "react-slick";
import "./ArtistList.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

let artists = require('../../data/artists');

function ArtistList() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "33vw",
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 812,
                settings: {
                    centerPadding: "3vw"
                },
                breakpoint: 1112,
                settings: {
                    centerPadding: "6vw"
                }

            }
        ]
      };
    return (

        <div className= "ArtistList">
            <h2>Popular Artists</h2>
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