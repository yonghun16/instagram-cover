import userData from '../../assets/data/userData';
import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import { useMemo } from 'react';
import ImageModal from "../ImageModal";
import useModalImageNavigation from "../../hooks/useModalImageNavigation";

/* import icons */
import like_fill from "../../assets/icons/like_fill.png";
import comment_fill from "../../assets/icons/comment_fill.png";
import carouselIcon from '../../assets/icons/carousel.png';


/* Styled Components */
const GridWrapper = styled.div`
  padding-top: 75px;
`;

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


function SearchGrid() {
  /* 초기 posts 배열 준비 */
  // userPosts : 랜덤한 순서의 유저 게시물(한번만 계산하기 위해 useMemo 사용)
  const usersPosts = useMemo(() => {
    let userRandomArray = [];   // 유저를 랜덤으로 나열한 배열

    // userRandomArray 배열 초기화 (userData의 수 만큼)
    for (let i = 0; i < userData.length; i++) {
      userRandomArray.push(i);
    }

    // fisher-yates : 셔플 알고리즘
    for (let i = userRandomArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [userRandomArray[i], userRandomArray[j]] = [userRandomArray[j], userRandomArray[i]];
    }
    // console.log(userRandomArray); // 디버깅: 확률적으로 균일한 셔플 결과
    // console.log(userData[userRandomArray[0]].posts[0].postImage); // 디버깅: postImage를 가져옴

    const posts = [];
    for (let i = 0; i < userRandomArray.length; i++) {
      for (let j = 0; j < 3; j++) {
        posts.push(userData[userRandomArray[i]].posts[j]);
      }
    }
    // console.log(usersPosts);  // 디버깅: 유저의 포스트 정보를 가져옴

    return posts;
  }, []);


  /* 무한 스크롤 로직 */
  const [displayPosts, setDisplayPosts] = useState(usersPosts); // 상태로 보여줄 포스트 관리 (for 무한 스크롤)
  const containerRef = useRef(null); // 스크롤 감지용 ref

  // 스크롤 핸들러 (하단 도달하면 게시물 더 붙이기)
  const onScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    // 스크롤이 거의 바닥에 닿으면
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
      // console.log(el.scrollTop, el.clientHeight, el.scrollHeight); // 디버깅 : (스크롤바 상단 y좌표 + 스크롤바 길이) = 스크롤바 하단 y좌표 > 스크롤영역 맨 마지막 y좌표 - 10
      setDisplayPosts((prev) => [...prev, ...usersPosts]);  // 기존 배열에 같은 배열 다시 붙이기 (무한 반복 효과)
    }
  };

  // 최초 1회는 반드시 실행
  useEffect(() => {
    onScroll();
  }, []);

  /* 모달 조작 버튼(이전 그림, 다음 그림, 닫기) */
  const {
    onModalImage,
    setOnModalImage,
    setModalPostIndex,
    closeModal,
    handleNext,
    handlePrev,
  } = useModalImageNavigation(displayPosts);

  /* Render */
  return (
    <GridWrapper
      ref={containerRef}
      style={{ height: '100vh', overflowY: 'auto' }}    // 스크롤 가능 영역 지정
      onScroll={onScroll}
    >
      <Grid>
        {displayPosts.map((post, i) => (
          <Post key={i}>
            <img
              src={post.postImage[0]}
              alt="posts"
              onClick={() => {
                setModalPostIndex(i);
                setOnModalImage(displayPosts[i].postImage);
              }}
            />
            {/* rollover 시 보이는 아이콘들 */}
            <PostImageOverlayIcon $src={post.postImage.length > 1 ? carouselIcon : ''} />
            <Overlay className="overlay" >
              <div><img src={like_fill} alt="like" />{post.likes.toLocaleString()}</div>
              <div><img src={comment_fill} alt="like" />{post.comments.toLocaleString()}</div>
            </Overlay>
          </Post>
        ))}
        {/* 이미지 모달에 image가 전달되면 모달창이 켜짐 */}
        <ImageModal image={onModalImage} onClose={closeModal} onPrev={handlePrev} onNext={handleNext} />
      </Grid>
    </GridWrapper>
  );
}

export default SearchGrid;
