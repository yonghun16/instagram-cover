import React from 'react';
import styled from 'styled-components';

/* UI Components */
import StatusBar from '../components/StatusBar';
import MainHeader from '../components/MainHeader';
import MainStories from '../components/MainStories';
import MainPost from '../components/MainPost';
import BottomNav from '../components/BottomNav';


/* Styled Components */
export const Container = styled.div`
  max-width: 400px;
  margin: auto;
  background: white;
  font-family: sans-serif;
`;

const MainPage = () => {
  return (
    <Container>
      <StatusBar />
      <MainHeader />
      <MainStories />
      <MainPost />
      <BottomNav /> 
    </Container>
  );
};

export default MainPage;
