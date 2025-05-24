import React, { useState } from "react";
import styled from "styled-components";

import ImageModal from "../ImageModal";

/* import icons */
import like_fill from "../../assets/icons/like_fill.png";
import comment_fill from "../../assets/icons/comment_fill.png";
import carouselIcon from '../../assets/icons/carousel.png';


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

const PostImageOverlayIcon = styled.div`
  position: absolute;
  top: 7px;
  right: 2px;
  width: 25px;
  height: 25px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.$src});
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
  const [modalImage, setModalImage] = useState(null);

  /* 모달 조작 버튼(이전 그림, 다음 그림, 닫기) */
  const [modalPostIndex, setModalPostIndex] = useState(null);
  const closeModal = () => setModalImage(null);

  const changeImage = (direction) => {
    if (modalPostIndex == null) return;

    const total = user.stories.length;
    const newIndex =
      direction === 'next'
        ? (modalPostIndex + 1) % total
        : (modalPostIndex - 1 + total) % total;

    const post = user.stories[newIndex];
    const image = post.postImage;

    setModalPostIndex(newIndex);
    setModalImage(Array.isArray(image) ? image : [image]);
  };

  const handleNext = () => changeImage('next');
  const handlePrev = () => changeImage('prev');


  return (
    <>
      <Grid>
        {user.stories.map((story, i) => (
          <Post key={i}>
            <img
              src={story.postImage[0]}
              alt="post"
              onClick={() => {
                setModalPostIndex(i);
                const img = user.stories[i].postImage;
                setModalImage(Array.isArray(img) ? img : [img]);
              }}
            />
            <PostImageOverlayIcon $src={story.postImage.length > 1 ? carouselIcon : ''} />
            <Overlay className="overlay">
              <div><img src={like_fill} alt="like" />{story.likes.toLocaleString()}</div>
              <div><img src={comment_fill} alt="like" />{story.comments.toLocaleString()}</div>
            </Overlay>
          </Post>
        ))}
        <ImageModal image={modalImage} onClose={closeModal} onPrev={handlePrev} onNext={handleNext} />
      </Grid>

    </>
  );
}

export default PostsGrid;
