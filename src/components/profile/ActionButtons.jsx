/* import libraries */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import styled from "styled-components";

/* import icons */
import friendPlusIcon from "../../assets/icons/human_plus.png";


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

const ButtonRight = styled.button`
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
  const [myProfile, setMyProfile] = useState(false);           // 내프로파일 상태
  const { username } = useParams();
  const loginUser = useSelector((state) => state.loginUser);   // 로그인 유저 정보 가져옴(이름, 프로필사진)

  useEffect(() => {
    if (loginUser.isLoggedIn && loginUser.name === username) {
      setMyProfile(true);  // 내프로파일 상태 true
    } else {
      setMyProfile(false);
    }
  }, [username]);

  return (
    <ButtonsWrapper>
      {!myProfile
        ?
        (<> {/* 내프로파일 상태가 아닐 때 */}
          <FllowButton>Follow</FllowButton>

          <ButtonRow>
            <Button>Message</Button>
            <Button>Subscribe</Button>
            <Button>Contact</Button>
            <ButtonRight><img src={friendPlusIcon} width="16" height="16" alt="friend plus" /></ButtonRight>
          </ButtonRow>
        </>)
        :
        (<> {/* 내프로파일 상태일 때 */}
          <ButtonRow>
            <Button>Edit Profile</Button>
            <ButtonRight><img src={friendPlusIcon} width="16" height="16" alt="friend plus" /></ButtonRight>
          </ButtonRow>
        </>)
      }
    </ButtonsWrapper>
  );
}

export default ActionButtons;
