/* import libraries */
import styled from "styled-components";

/* import components */
import ImageCaroucel from './ImageCaroucel';

/* import icons */
import closeIcon from "../assets/icons/close.png";
import prevIcon from "../assets/icons/left.png";
import nextIcon from "../assets/icons/right.png";


/* Styled Components */
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  img {
    max-width: 80vw;
    max-height: 90vh;
    object-fit: contain;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 5px;
  left: ${props => props.$left};

  background: none;
  color: black;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;

  img {
    width: 20px;
    height: 20px;
  }

  ${props => props.$circle && `
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);

    top: 50vh;

    img {
      width: 10px;
      height: 15px;
    }
  `}

  &:hover {
    opacity: 0.7;
  }
`;


function ImageModal({ image, onClose, onPrev, onNext }) {
  if (!image) return null;

  return (
    <ModalWrapper>
      <Button onClick={onClose} >
        <img src={closeIcon} alt="close" />
      </Button>
      <Button onClick={onPrev} $left='5px' $circle={true}>
        <img src={prevIcon} alt="prev" />
      </Button>
      <Button onClick={onNext} $circle={true}>
        <img src={nextIcon} alt="next" />
      </Button>
      <ModalContent>
        {image.length > 1 
          ? ( <ImageCaroucel 
            post={image} 
            height='700px' 
            containerWidth='80vw'/>)
          : ( <img src={image[0]} alt="image" /> )
        }
      </ModalContent>
    </ModalWrapper>
  );
}

export default ImageModal;
