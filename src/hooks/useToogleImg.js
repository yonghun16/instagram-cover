import { useState } from 'react';

function useToggleImage(firstSrc, secondSrc) {
  const [currentImg, setCurrentSrc] = useState(firstSrc);

  // 이미지 변경 토글
  function toggleImage() {
    setCurrentSrc(prev => (prev === firstSrc ? secondSrc : firstSrc));  // 이전 이미지와 다음 이미지를 바꾸기
  }

  // toggleImage 함수를 export(return) 하여 사용 컴포넌트에서 hook의 toggleImage'함수'를 사용할 수 있게함.
  return { 
    currentImg, 
    toggleImage 
  };
}

export default useToggleImage;
