/* import libraries */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {Link, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

/* import icons */
import leftArrowIcon from "../../assets/icons/left_arrow.png";
import verifiedIcon from "../../assets/icons/verified.png";
import bellIcon from "../../assets/icons/bell.png";
import moreIcon from "../../assets/icons/more.png";
import plusIcon from "../../assets/icons/plus.png";
import burgerIcon from "../../assets/icons/burger.png";


/* Styled Components ProfileHeader */
const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 45px 15px 3px 15px;
  align-items: center;
  background-color: white;
`;

const LeftSection = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CenterSection = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 6px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

const Username = styled.div`
  transform: translateY(2px);
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
`;

const VerifiedIcon = styled.img`
  width: 16px;
`;

const RedVerified = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 400;
  color: white;
  background-color: red;
  border-radius: 20px; 
  width: 25px;
  height: 16px;
`;

const Icon = styled.img`
  height: 23px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;


const ProfileHeader = ({ user }) => {
  const [myProfile, setMyProfile] = useState(false);   // 내프로파일 상태
  const { username } = useParams();
  const loginUser = useSelector((state) => state.loginUser);   // 로그인 유저 정보(이름, 프로필) 불러옴

  useEffect(() => {
    if (loginUser.isLoggedIn && loginUser.name === username) { // 로그인되어있고, 이름이 useParams과 같을 때
      setMyProfile(true);  // 내프로파일 상태 true
    } else {
      setMyProfile(false);
    }
  }, [username]);

  // console.log(myProfile);  디버그

  return (
    <HeaderWrapper>
      {!myProfile
        ?
        (<>  {/* 내프로파일 상태가 아닐 때 */}
          <LeftSection>
            <Link
              to={{ pathname: '/' }} >
              <Icon src={leftArrowIcon} alt="back arrow" />
            </Link>
          </LeftSection>

          <CenterSection>
            <Username>{user.name}</Username>
            <VerifiedIcon src={verifiedIcon} alt="verified" />
          </CenterSection>

          <RightSection>
            <Icon src={bellIcon} alt="bell" />
            <Icon src={moreIcon} alt="more" />
          </RightSection>
        </>)
        : 
        (<>  {/* 내프로파일 상태 */}
          <LeftSection>
            {user.name}
            <RedVerified>10+</RedVerified> 
          </LeftSection>

          <RightSection>
            <Icon src={plusIcon} alt="plus" />
            <Icon src={burgerIcon} alt="burger" />
          </RightSection>
        </>)
      }
    </HeaderWrapper>
  );
};

export default ProfileHeader;
