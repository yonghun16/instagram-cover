import { useLocation } from 'react-router-dom';
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
  justify-content: center; /* 가운데 정렬 */
  align-items: center;
`;

const NavContainer = styled.div`
  width: 400px;
  height: 50px;
  background: white;
  display: flex;
  justify-content: space-around; /* 아이콘 간격 */
  align-items: center;
`;

const IconImg = styled.img`
  height: 24px;
  &:hover {
    opacity: 0.7;
  }

`;

export default function BottomNav() {
  const location = useLocation();
  // console.log(location.pathname);  // 디버그

  return (
    <BottomNavWrapper>
      <NavContainer>
        <IconImg src= {location.pathname === '/' ? HomeIconActive : HomeIcon} alt="Home" />
        <IconImg src={SearchIcon} alt="Search" />
        <IconImg src={RealsIcon} alt="Reels" />
        <IconImg src={ShoppingBagIcon} alt="Shop" />
        <IconImg src={userData[0].image} alt="Profile" />
      </NavContainer>
    </BottomNavWrapper>
  );
}
