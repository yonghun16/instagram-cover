import React from "react";
import styled from "styled-components";

/* import icons */
import like_fill from "../../assets/icons/like_fill.png";
import comment_fill from "../../assets/icons/comment_fill.png";


/* Styled Components */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  padding: 8px 0 50px 0;
  background-color: white;
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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    
    img {
      margin: 3px 7px;
      width: 20px;
      height: 20px;
    }
  }
`;

function PostsGrid({ user }) {
  return (
    <Grid>
      {user.stories.map((story, i) => (
        <Post key={i}>
          <img
            src={Array.isArray(story.postImage) ? story.postImage[0] : story.postImage} alt="post" />
          <Overlay className="overlay" >
            <div><img src={like_fill} alt="like" />{story.likes.toLocaleString()}</div>
            <div><img src={comment_fill} alt="like" />{story.comments.toLocaleString()}</div>
          </Overlay>
        </Post>
      ))}
    </Grid>
  );
}

export default PostsGrid;
