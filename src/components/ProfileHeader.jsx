import React from "react";
import styled from "styled-components";

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

const BackArrow = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

const Username = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

const VerifiedIcon = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: #1d9bf0;
  border-radius: 50%;
  position: relative;

  &::after {
    content: "✓";
    color: white;
    font-size: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
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
  gap: 16px;
`;

const BellIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("data:image/svg+xml,%3Csvg fill='black' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 24c1.104 0 2-.896 2-2h-4c0 1.104.896 2 2 2zm6.364-6c-.392-1.169-.821-3.04-.821-5 0-3.07-1.641-5.64-4.543-6.32V6c0-.828-.672-1.5-1.5-1.5S10 5.172 10 6v.68C7.098 7.36 5.457 9.93 5.457 13c0 1.96-.429 3.831-.821 5H18.364zM20 20H4v-2h16v2z'/%3E%3C/svg%3E");
  background-size: cover;
`;

const MoreIcon = styled.div`
  font-size: 24px;
  line-height: 0;
  cursor: pointer;
`;

const ProfileHeader = () => {
  return (
    <HeaderWrapper>
      <LeftSection>
        <BackArrow>&larr;</BackArrow>
      </LeftSection>
      <CenterSection>
        <Username>username</Username>
        <VerifiedIcon />
      </CenterSection>
      <RightSection>
        <BellIcon />
        <MoreIcon>&#8230;</MoreIcon>
      </RightSection>
    </HeaderWrapper>
  );
};

export default ProfileHeader;
