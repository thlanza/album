import React from "react";
import './gallery.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const buildURL = imagePath =>
  `https://thiago-carol-album.herokuapp.com/${imagePath}.jpg`;

export const Gallery = (props) => {
let images = props.images;
let collectionName = props.name;
return (
  <Carousel className="box">
    {images.map(image => (
    <div>
      <img className="image"
        src={buildURL(image)}
      />
      <p className="legend">{collectionName}</p>
    </div>
    ))}
  </Carousel>
 
)
};
