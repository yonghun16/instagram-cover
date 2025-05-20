import React from "react";
import styled from "styled-components";


/* Styled Components */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  padding: 8px 0 100px 0;
`;

const Post = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

export default function PostsGrid({ user }) {
  return (
    <Grid>
      {user.stories.map((story, i) => (
        <Post key={i}>
          <img src={story.postImage} alt="highlight" />
          <Overlay className="overlay" />
        </Post>
      ))}
    </Grid>
  );
}
