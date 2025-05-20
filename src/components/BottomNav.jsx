import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import userData from '../assets/data/userData';
import styled from 'styled-components';

/* import icons */
import HomeIcon from '../assets/icons/bottom_icons/home.png';
import HomeIconActive from '../assets/icons/bottom_icons/home_active.png';
import SearchIcon from '../assets/icons/bottom_icons/search.png';
import RealsIcon from '../assets/icons/bottom_icons/reels.png';
import ShoppingBagIcon from '../assets/icons/bottom_icons/shop.png';


/* BottomNav styled components */
const BottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.div`
  width: 400px;
  height: 50px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IconImg = styled.img`
  height: 24px;
  ${props => props.$active && `
    border: 2px solid black;
    border-radius: 50%;`}
  &:hover {
    opacity: 0.7;
  }
`;


const BlackCircle = styled.div`
  border: 2px solid black;
`;


export default function BottomNav() {
  const [loginUser, setloginUser] = useState(userData[0]);
  const location = useLocation();
  // console.log(location.pathname);  // 디버그
  // console.log(loginUser);  // 디버그

  return (
    <BottomNavWrapper>
      <NavContainer>
        <Link
          to={{ pathname: '/' }} >
          <IconImg src={location.pathname === '/' ? HomeIconActive : HomeIcon} alt="Home" />
        </Link>
        <IconImg src={SearchIcon} alt="Search" />
        <IconImg src={RealsIcon} alt="Reels" />
        <IconImg src={ShoppingBagIcon} alt="Shop" />
        <Link
          to={{ pathname: `/${loginUser.name}` }} >
          <IconImg
            src={loginUser.image}
            alt="Profile"
            $active={location.pathname === `/${loginUser.name}`}
          />
        </Link>
      </NavContainer>
    </BottomNavWrapper>
  );
}
