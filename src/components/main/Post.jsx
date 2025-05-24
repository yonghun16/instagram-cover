import styled from 'styled-components';

/* import data */
import userData from '../../assets/data/userData';
import PostCard from './PostCard';


/* Post styled components */
const BottomHeight = styled.div`
  height: 55px;
`;

function Post() {
  const recentPosts = [];  // 최근 포스트

  for (let i = 0; i < 5; i++) { // 5개의 포스트
    const recentPostData = (userNum, postNum) => {
      const recentUser = Math.floor(Math.random() * userNum);
      const recentPost = Math.floor(Math.random() * postNum);

      return { recentUser, recentPost };
    }
    const { recentUser, recentPost } = recentPostData(5, 3);  // 5명의 사용자중의 3개의 포스트

    if (recentPosts.find(item => item.recentUser === recentUser)) {  // 유저 중복 제거
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
