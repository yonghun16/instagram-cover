/* import libraries */
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

/* import icons */
import HomeIcon from '../assets/icons/bottom_icons/home.png';
import HomeActiveIcon from '../assets/icons/bottom_icons/home_active.png';
import SearchIcon from '../assets/icons/bottom_icons/search.png';
import SearchActiveIcon from '../assets/icons/bottom_icons/search_active.png';
import ReelsIcon from '../assets/icons/bottom_icons/reels.png';
import ReelsActiveIcon from '../assets/icons/bottom_icons/reels_active.png';
import ShoppingBagIcon from '../assets/icons/bottom_icons/shop.png';
import ShoppingBagActiveIcon from '../assets/icons/bottom_icons/shop_active.png';


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


function BottomNav() {
  const loginUser = useSelector((state) => state.loginUser);   // 로그인 상태 받아오기
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]);

  // console.log(location.pathname);  // 디버그
  // console.log(loginUser);  // 디버그

  return (
    <BottomNavWrapper>
      <NavContainer>
        <Link
          to={{ pathname: '/' }} >
          <IconImg src={location.pathname === '/' ? HomeActiveIcon : HomeIcon} alt="Home" />
        </Link>

        <Link
          to={{ pathname: '/search' }} >
          <IconImg src={location.pathname === '/search' ? SearchActiveIcon : SearchIcon} alt="Search" />
        </Link>

        <Link
          to={{ pathname: '/reels' }} >
          <IconImg src={location.pathname === '/reels' ? ReelsActiveIcon : ReelsIcon} alt="Search" />
        </Link>

        <Link
          to={{ pathname: '/shop' }} >
          <IconImg src={location.pathname === '/shop' ? ShoppingBagActiveIcon : ShoppingBagIcon} alt="Shop" />
        </Link>

        {/* 로그인한 유저의 프로파일로 이동 */}
        <Link
          to={{ pathname: `/${loginUser.name}` }} >
          <IconImg
            src={loginUser.image ? loginUser.image : null}
            $active={location.pathname === `/${loginUser.name}`}
            alt="Profile"
          />
        </Link>

      </NavContainer>
    </BottomNavWrapper>
  );
}

export default BottomNav;
