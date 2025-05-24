/* import libraries */
import styled from 'styled-components';

/* import data, components */
import userData from '../../assets/data/userData';
import PostCard from './PostCard';


/* styled components */
const BottomHeight = styled.div`
  height: 55px;
`;


function Post() {
  const recentPosts = [];  // 최근 포스트

  // 메인 포스트 5개 보여줌
  for (let i = 0; i < 5; i++) {
    const recentPostData = (userNum, postNum) => {
      const recentUser = Math.floor(Math.random() * userNum);
      const recentPost = Math.floor(Math.random() * postNum);

      return { recentUser, recentPost };
    }

    // 랜덤유저(0~4) 랜덤 포스트(0~2)선택
    const { recentUser, recentPost } = recentPostData(5, 3); 

    // 유저 중복 제거
    if (recentPosts.find(item => item.recentUser === recentUser)) {
      i--;
      continue;
    }
    recentPosts.push({ recentUser, recentPost });
  }

  return (
    <>
      {recentPosts.map(({ recentUser, recentPost }, index) => (
        <PostCard
          key={index}
          user={userData[recentUser]}
          post={userData[recentUser].posts[recentPost]}
        />
      ))}
      <BottomHeight />
    </>
  );
}

export default Post
