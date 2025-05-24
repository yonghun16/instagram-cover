import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // 기본 슬라이더 스타일은 유지

// 캐러셀 전체 래퍼 (부모 컨테이너)
const CarouselWrapper = styled.div`
  width: ${({ $containerWidth }) => $containerWidth || '100%'};
  max-width: 800px;
  margin: 0 auto;
  border-radius: ${({ $containerBorderRadius }) => $containerBorderRadius || '0'}; 
  overflow: hidden;
`;

// 캐러셀 내부 이미지
const CarouselImage = styled.img`
  width: 100%;
  height: ${({ $height }) => $height};
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

const ImageCarousel = ({ story, height = '300px', containerWidth = '100%', containerBorderRadius = '0'}) => {
  return (
    <CarouselWrapper $containerWidth={containerWidth} $containerBorderRadius={containerBorderRadius}>
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
  </CarouselWrapper>
  );
};

export default ImageCarousel;
