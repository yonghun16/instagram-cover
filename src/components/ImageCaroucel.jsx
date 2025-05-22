import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './carousel.min.css';


const ImageCarousel = ({story}) => {
  return (
    <Carousel 
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
    >
      {story.map((item, idx) => (
        <div key={idx}>
          <img src={item} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
