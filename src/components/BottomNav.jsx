import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import userData from '../assets/data/userData';
import styled from 'styled-components';

/* import icons */
import HomeIcon from '../assets/icons/bottom_icons/home.png';
import HomeIconActive from '../assets/icons/bottom_icons/home_active.png';
import SearchIcon from '../assets/icons/bottom_icons/search.png';
import SearchIconActive from '../assets/icons/bottom_icons/search_active.png';
import ReelsIcon from '../assets/icons/bottom_icons/reels.png';
import ReelsIconActive from '../assets/icons/bottom_icons/reels_active.png';
import ShoppingBagIcon from '../assets/icons/bottom_icons/shop.png';
import ShoppingBagIconActive from '../assets/icons/bottom_icons/shop_active.png';


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
  z-index: 1;
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
  &:hover {
    opacity: 0.7;
  }
  ${props => props.$active && `
    border: 2px solid black;
    border-radius: 50%;`}
`;


export default function BottomNav() {
  const [loginUser, setloginUser] = useState(userData[0]);  // 로그인 유저 반환
  const location = useLocation();

  // console.log(location.pathname);  // 디버그
  // console.log(loginUser);  // 디버그

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]);

  return (
    <BottomNavWrapper>
      <NavContainer>
        <Link
          to={{ pathname: '/' }} >
          <IconImg src={location.pathname === '/' ? HomeIconActive : HomeIcon} alt="Home" />
        </Link>
        <Link
          to={{ pathname: '/search' }} >
          <IconImg src={location.pathname === '/search' ? SearchIconActive : SearchIcon} alt="Search" />
        </Link>
        <Link
          to={{ pathname: '/reels' }} >
          <IconImg src={location.pathname === '/reels' ? ReelsIconActive : ReelsIcon} alt="Search" />
        </Link>
        <Link
          to={{ pathname: '/shop' }} >
          <IconImg src={location.pathname === '/shop' ? ShoppingBagIconActive : ShoppingBagIcon} alt="Shop" />
        </Link>
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
