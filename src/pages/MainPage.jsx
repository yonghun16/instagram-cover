import React from 'react';
import styled from 'styled-components';

/* UI Components */
import MainHeader from '../components/main/MainHeader';
import Stories from '../components/main/Stories';
import Post from '../components/main/Post';


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
      <Stories />
      <Post />
    </Container>
  );
};

export default MainPage;
