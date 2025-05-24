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
  /* 모달 조작 버튼(이전 그림, 다음 그림, 닫기) */
  const [onModalImage, onSetModalImage] = useState(null);
  const [modalPostIndex, setModalPostIndex] = useState(null);
  const closeModal = () => onSetModalImage(null);

  const changeImage = (direction) => {
    if (modalPostIndex == null) return;

    const total = user.posts.length;
    const newIndex =
      direction === 'next'
        ? (modalPostIndex === total - 1 ? total - 1 : modalPostIndex + 1)   // 마지막 장이 아닐 때만 다음 그림
        : (modalPostIndex === 0 ? 0 : modalPostIndex - 1)               // 맨 처음 장이 아닐 때만 이전 그림

    const post = user.posts[newIndex];   // 페이지 업데이트

    setModalPostIndex(newIndex);      // 업데이트 적용
    onSetModalImage(post.postImage);  // 업데이트 적용
  };

  const handleNext = () => changeImage('next');
  const handlePrev = () => changeImage('prev');


  /* render */
  return (
    <>
      <Grid>
        {user.posts.map((post, i) => (
          <Post key={i}>
            <img
              src={post.postImage[0]}
              alt="post"
              onClick={() => {
                setModalPostIndex(i);
                onSetModalImage(user.posts[i].postImage);
              }}
            />
            {/* rollover 시 보이는 아이콘 */}
            <PostImageOverlayIcon $src={post.postImage.length > 1 ? carouselIcon : ''} />
            <Overlay className="overlay"> 
              <div><img src={like_fill} alt="like" />{post.likes.toLocaleString()}</div>
              <div><img src={comment_fill} alt="comment" />{post.comments.toLocaleString()}</div>
            </Overlay>
          </Post>
        ))}
        {/* 이미지 모달에 image가 전달되면 모달창이 켜짐 */}
        <ImageModal image={onModalImage} onClose={closeModal} onPrev={handlePrev} onNext={handleNext} />
      </Grid>

    </>
  );
}

export default PostsGrid;
