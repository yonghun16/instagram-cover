import React from "react";
import styled from "styled-components";
import human_plus from "../../assets/icons/human_plus.png";


/* Styled Components */
const ButtonsWrapper = styled.div`
  padding: 16px;
  background-color: white;
`;

const FllowButton = styled.button`
  width: 100%;
  padding: 5px;
  border: 1px solid #ddd;
  background: #1EA1FF;
  color: white;
  border-radius: 4px;
  font-weight: 800;
  font-size: 0.9rem;
  &:hover {
    background-color: #1777F2;
  }
  cursor: pointer;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 7px;
  margin-top: 10px;
`;

const Button = styled.button`
  flex: 1;
  padding: 4px;
  border: 0;
  background: #EFEFEF;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.9rem;
  &:hover {
    background-color: #DBDBDB;
  }
  cursor: pointer;
`;

const ButtonSmall = styled.button`
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border: 0;
  background: #EFEFEF;
  border-radius: 4px;
  &:hover {
    background-color: #DBDBDB;
  }
  cursor: pointer;
`;


function ActionButtons() {
  return (
    <ButtonsWrapper>
      <FllowButton>Follow</FllowButton>
      <ButtonRow>
        <Button>Message</Button>
        <Button>Subscribe</Button>
        <Button>Contact</Button>
        <ButtonSmall>
          <img src={human_plus} width="16" height="16" />
        </ButtonSmall>
      </ButtonRow>
    </ButtonsWrapper>
  );
}

export default ActionButtons;
