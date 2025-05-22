import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

/* import icons */
import likeIcon from '../../assets/icons/like.png'
import messageIcon from '../../assets/icons/message.png'
import plusIcon from '../../assets/icons/plus.png'


/* Styled Components MainHeader */
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 45px 15px 10px 15px;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  width: 150px;
  height: 30px;
  cursor: pointer;
`;

const RightSection = styled.div`
  display: flex;
  gap: 20px;
  font-size: 18px;
`;

const Icon = styled.img`
  height: 23px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

function MainHeader() {
  return (
    <HeaderWrapper>
      <LeftSection>
        <Logo />
      </LeftSection>
      <RightSection>
        <Icon src={likeIcon} alt="like" />
        <Icon src={messageIcon} alt="message" />
        <Icon src={plusIcon} alt="plus" />
      </RightSection >
    </HeaderWrapper>
  )
}

export default MainHeader
