/* import libraries */
import React from "react";
import styled from "styled-components";

/* import icons */
import friendsIcon from "../../assets/icons/friends.png";
import favoritesIcon from "../../assets/icons/favorites.png";


/* styled components */
const MiniModal = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  background-color: white;
  width: 130px;
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 100;
  display: ${props => (props.$visible ? 'block' : 'none')};
`;

const ModalItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  padding-left: 14px;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Icon = styled.img`
  height: 20px;
  margin-right: 10px;
`;


function LogoModal({ isVisible }) {
  return (
    <MiniModal $visible={isVisible}>

      <ModalItem>
        <span>팔로잉</span> 
        <Icon src={friendsIcon} alt="friends"/>
      </ModalItem>

      <ModalItem>
        <span>즐겨찾기</span>
        <Icon src={favoritesIcon} alt="favorites" />
      </ModalItem>

    </MiniModal>
  );
};

export default LogoModal;
