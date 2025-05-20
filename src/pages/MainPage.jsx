import React from 'react';
import styled from 'styled-components';

/* UI Components */
import MainHeader from '../components/MainHeader';
import MainStories from '../components/MainStories';
import MainPost from '../components/MainPost';


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
      <MainHeader />
      <MainStories />
      <MainPost />
    </Container>
  );
};

export default MainPage;
