import React from 'react';
import styled from 'styled-components';
import userData from '../assets/data/userData';

const StoriesWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Story = styled.div`
  text-align: center;
  margin-right: 10px;
`;

const StoryImage = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin: auto;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.$src || ''});
`;

const StoryText = styled.p`
  font-size: 12px;
  margin-top: 5px;
`;

const Stories = () => {
  return (
    <StoriesWrapper>
      {userData.map((user, i) => (
        <Story key={i}>
          <StoryImage $src={user.image} />
          <StoryText>{user.name}</StoryText>
        </Story>
      ))}
    </StoriesWrapper>
  );
};

export default Stories;
