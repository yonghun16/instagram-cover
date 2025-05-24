/* import libraries */
import React from "react";
import styled from "styled-components";


/* styled components */
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
      {user.posts.map((post, i) => (
        <Highlight key={i}>
          <img src={post.postImage[0]} alt="highlight" />   {/* 포스트 사진 대충 가져다 붙임 */}
          <div>{user.name}{i}</div>                         {/* 포스트 작성자 이름 대충 붙임 */}
        </Highlight>
      ))}
    </HighlightsWrapper>
  );
}

export default Highlights;
