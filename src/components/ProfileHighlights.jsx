import React from "react";
import styled from "styled-components";

const HighlightsWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 16px;
  overflow-x: auto;
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

function ProfileHighlights({ user }) {
  return (
    <HighlightsWrapper>
      {user.stories.map((story, i) => (
        <Highlight key={i}>
          <img src={story.postImage} alt="highlight" />
          <div>{story.postImage.match(/\/post\/([^/.]+)/)[1]}</div>
        </Highlight>
      ))}
    </HighlightsWrapper>
  );
}

export default ProfileHighlights;
