/* import libraries */
import styled from "styled-components";

/* import components, hooks */
import ImageModal from "../ImageModal";
import useModalImageNavigation from "../../hooks/useModalImageNavigation";

/* import icons */
import likeFillIcon from "../../assets/icons/like_fill.png";
import commentFillIcon from "../../assets/icons/comment_fill.png";
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

const CarouselMarkIcon = styled.div`
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
  const {
    onModalImage,       // 모달 상태(true, false)
    setOnModalImage,    // 모달 열고 닫기
    setModalPostIndex,  // 모달 포스트 인덱스

    closeModal,  // 모달 닫기
    handleNext,  // 다음 포스트
    handlePrev,  // 이전 포스트
  } = useModalImageNavigation(user.posts);


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
                setOnModalImage(user.posts[i].postImage);
              }}
            />

            {/* 아이콘들, Overlay 안의 아이콘은 RollOver시에만 보임 */}
            <CarouselMarkIcon $src={post.postImage.length > 1 ? carouselIcon : ''} />
            <Overlay className="overlay">
              <div><img src={likeFillIcon} alt="like" />{post.likes.toLocaleString()}</div>
              <div><img src={commentFillIcon} alt="comment" />{post.comments.toLocaleString()}</div>
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
