import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import downArrowIcon from '../assets/icons/down_arrow.png'
import likeIcon from '../assets/icons/like.png'
import messageIcon from '../assets/icons/message.png'
import plusIcon from '../assets/icons/plus.png'


// Styled Components MainHeader
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 45px 15px 10px 15px;
  align-items: center;
`;


export const LogoWrap = styled.div`
  display: flex;
  width: 150px;
  height: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Logo = styled.img`
  height: 30px;
`;

export const DownArowIcon = styled.img`
  height: 20px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 20px;
  font-size: 18px;
`;

export const Icon = styled.img`
  height: 23px;
`;

function MainHeader() {
  return (
    <Header>
      <LogoWrap>
        <Logo src={logo} alt="logo" />
        <DownArowIcon src={downArrowIcon} alt="down arrow" />
      </LogoWrap>
      <Icons>
        <Icon src={likeIcon} alt="like" />
        <Icon src={messageIcon} alt="message" />
        <Icon src={plusIcon} alt="plus" />
      </Icons>
    </Header>
  )
}

export default MainHeader
