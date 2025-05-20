import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/* import icons */
import left_arrow from "../../assets/icons/left_arrow.png";
import verified from "../../assets/icons/verified.png";
import bell from "../../assets/icons/bell.png";
import more from "../../assets/icons/more.png";

/* Styled Components ProfileHeader */
const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 45px 15px 10px 15px;
  align-items: center;
`;

const LeftSection = styled.div`
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

const Icon = styled.img`
  height: 23px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;


const ProfileHeader = ({ user }) => {
  return (
    <HeaderWrapper>
      <LeftSection>
        <Link
          to={{ pathname: '/' }} >
          <Icon src={left_arrow} alt="back arrow" />
        </Link>
      </LeftSection>
      <CenterSection>
        <Username>{user.name}</Username>
        <VerifiedIcon src={verified} alt="verified" />
      </CenterSection>
      <RightSection>
        <Icon src={bell} />
        <Icon src={more} />
      </RightSection>
    </HeaderWrapper>
  );
};

export default ProfileHeader;
