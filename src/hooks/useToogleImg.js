import { useState } from 'react';

function useToggleImage(firstSrc, secondSrc) {
  const [currentImg, setCurrentSrc] = useState(firstSrc);

  function toggleImage() {
    setCurrentSrc(prev => (prev === firstSrc ? secondSrc : firstSrc));
  }

  return { currentImg, toggleImage }; // toggleImage 함수를 export(return) 하여 컴포넌트에서 toggleImage함수를 사용할 수 있게함.
}

export default useToggleImage;
