/* import libraries */
import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // 캐러셀 기본 스타일


/* Styled Components */
// 캐러셀 전체 래퍼 (부모 컨테이너)
const CarouselWrapper = styled.div`
  width: ${({ $containerWidth }) => $containerWidth || '100%'};
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;

  .control-arrow {
    background: none !important;
  }
`;

// 캐러셀 내부 이미지
const CarouselImage = styled.img`
  width: 100%;
  height: ${({ $height }) => $height};
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;


const ImageCarousel = ({ post, height = '300px', containerWidth = '100%'}) => {
  return (
    <CarouselWrapper $containerWidth={containerWidth} >
    <Carousel 
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
    >
      {post.map((item, i) => (
        <div key={i}>
          <CarouselImage src={item} alt={`slide-${i}`} $height={height} />
        </div>
      ))}
    </Carousel>
  </CarouselWrapper>
  );
};

export default ImageCarousel;
