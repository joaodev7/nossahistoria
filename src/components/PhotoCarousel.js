import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function PhotoCarousel() {
const photos = [
    "/images/1.JPEG",
    "/images/2.JPG",
    "/images/3.JPG",
    "/images/4.JPG",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.JPEG",
    "/images/9.JPEG",
    "/images/10.JPEG",
    "/images/11.JPEG",
    "/images/13.JPEG",
    "/images/14.jpeg",
    "/images/15.JPG",
];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="photo-carousel">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`Foto ${index + 1}`} className="carousel-photo" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PhotoCarousel;