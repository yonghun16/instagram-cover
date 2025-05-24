import React from "react";
import styled from "styled-components";

const HighlightsWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 16px;
  overflow-x: auto;
  background-color: white;
`;

const Highlight = styled.div`
  flex-shrink: 0;
  text-align: center;

  img {
    width: 60px;
    height: 60px;
    padding: 4px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }

  div {
    margin-top: 4px;
    font-size: 12px;
  }

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

function Highlights({ user }) {
  return (
    <HighlightsWrapper>
      {user.posts.map((story, i) => (
        <Highlight key={i}>
          <img src={Array.isArray(story.postImage) ? story.postImage[0] : story.postImage} alt="highlight" />
          <div>{user.name}{i}</div>
        </Highlight>
      ))}
    </HighlightsWrapper>
  );
}

export default Highlights;
