/* import libraries */
import React, { useState } from 'react';
import styled from 'styled-components';

/* import components */
import LogoModal from './LogoModal';

/* import images */
import logo from '../../assets/logo.png';
import downArrowIcon from '../../assets/icons/down_arrow.png';


/* styled components */
const LogoWrapper = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

const LogoImg = styled.img`
  height: 30px;
`;

const DownArrowIcon = styled.img`
  height: 20px;
`;

function Logo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <LogoWrapper onClick={toggleModal}>
      <LogoImg src={logo} alt="logo" />
      <DownArrowIcon src={downArrowIcon} alt="down arrow" />

      <LogoModal isVisible={isOpen} />
    </LogoWrapper>
  );
}

export default Logo;
