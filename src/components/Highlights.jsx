import React from "react";
import styled from "styled-components";

const HighlightsWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 16px;
  overflow-x: auto;
`;

const Highlight = styled.div`
  text-align: center;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }

  div {
    margin-top: 4px;
    font-size: 12px;
  }
`;

export default function Highlights() {
  return (
    <HighlightsWrapper>
      {[...Array(6)].map((_, i) => (
        <Highlight key={i}>
          <img src="https://placekitten.com/100/100" alt="highlight" />
          <div>Text here</div>
        </Highlight>
      ))}
    </HighlightsWrapper>
  );
}
