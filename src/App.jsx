import 'modern-css-reset';
import { createGlobalStyle } from "styled-components";
import { Outlet } from 'react-router-dom';
import StatusBar from './components/StatusBar';
import BottomNav from './components/BottomNav';
import useLoginUser from './hooks/useLoginUser'; 

const GlobalStyle = createGlobalStyle`
  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;             /* Chrome, Edge, Safari */
  }

  html, body {
    scrollbar-width: none;     /* Firefox */
    -ms-overflow-style: none;  /* IE 10+ */
  }

  * {
   -webkit-tap-highlight-color: transparent;   * 터치 피드백 제거 */
  }
`;

function App() {
  const loginUser = useLoginUser();
  // console.log(loginUser);

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
