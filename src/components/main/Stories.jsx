import React from 'react';
import styled from 'styled-components';
import userData from '../../assets/data/userData';
import storyRing from '../../assets/avatar/Story_ring.png';
import { Link } from "react-router-dom";

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

const StoryRingWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props => (props.$hasRing ? `url(${storyRing})` : 'none')};
  background-size: cover;
  transition: transform 0.15s ease;
  &:hover {
    transform: scale(0.93);
  }
  &:active {
    transform: scale(0.89);
  }
`;

const StoryImage = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.$src});
  cursor: pointer;
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
          <Link
            to={{ pathname: `/${user.name}` }}
            state={{ name: user.name }} >
            <StoryRingWrapper $hasRing={user.newStory}>
              <StoryImage $src={user.image} />
            </StoryRingWrapper>
          </Link>
          <StoryText>{user.name}</StoryText>
        </Story>
      ))}
    </StoriesWrapper>
  );
};

export default Stories;
