import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // 기본 슬라이더 스타일은 유지

// styled-components 정의
const CarouselImage = styled.img`
  width: 100%;
  height: ${({ $height }) => $height};
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

const ImageCarousel = ({ story, height = '300px' }) => {
  return (
    <Carousel 
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
    >
      {story.map((item, idx) => (
        <div key={idx}>
          <CarouselImage src={item} alt={`slide-${idx}`} $height={height} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
