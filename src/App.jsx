import { Outlet } from 'react-router-dom';
import 'modern-css-reset';
import { createGlobalStyle } from "styled-components";
import StatusBar from './components/StatusBar';
import BottomNav from './components/BottomNav';

const GlobalStyle = createGlobalStyle`
  /* 스크롤바 숨기기 */
  /* 웹킷 기반 브라우저 (Chrome, Safari 등) */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Firefox용 */
  html, body {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */
  }

  * {
   -webkit-tap-highlight-color: transparent;
  }
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <StatusBar />
      <Outlet />
      <BottomNav />
    </>
  )
}

export default App
