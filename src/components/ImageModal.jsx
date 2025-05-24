import React from "react";
import styled from "styled-components";
import closeIcon from "../assets/icons/close.png";
import ImageCaroucel from './ImageCaroucel';

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
    max-width: 90vw;
    max-height: 90vh;
    border-radius: 8px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  background: none;
  color: black;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <ModalWrapper>
      <CloseButton onClick={onClose}>
        <img src={closeIcon} alt="close" />
      </CloseButton>
      <ModalContent>
        {image.length > 1 
          ? ( <ImageCaroucel story={image} height='80vh'/> )
          : ( <img src={image[0]} alt="image" /> )
        }
      </ModalContent>
    </ModalWrapper>
  );
}

export default ImageModal;
