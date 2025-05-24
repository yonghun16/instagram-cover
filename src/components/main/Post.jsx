import styled from 'styled-components';

/* import data */
import userData from '../../assets/data/userData';
import PostCard from './PostCard';


/* Post styled components */
const BottomHeight = styled.div`
  height: 55px;
`;

function Post() {
  const recentPosts = [];

  for (let i = 0; i < 5; i++) {
    const recentPostData = (userNum, postNum) => {
      const recentUser = Math.floor(Math.random() * userNum);
      const recentPost = Math.floor(Math.random() * postNum);

      return { recentUser, recentPost };
    }
    const { recentUser, recentPost } = recentPostData(5, 3);

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
