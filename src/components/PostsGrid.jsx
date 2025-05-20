import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin-top: 8px;
`;

const Post = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

export default function PostsGrid() {
  const images = [
    "https://placekitten.com/300/300",
    "https://placekitten.com/301/300",
    "https://placekitten.com/302/300",
    "https://placekitten.com/303/300",
    "https://placekitten.com/304/300",
    "https://placekitten.com/305/300"
  ];

  return (
    <Grid>
      {images.map((src, index) => (
        <Post key={index} src={src} />
      ))}
    </Grid>
  );
}
