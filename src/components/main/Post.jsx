import styled from 'styled-components';

/* import data */
import userData, { recentData } from '../../assets/data/userData';
import PostCard from './PostCard';


/* Post styled components */
const BottomHeight = styled.div`
  height: 55px;
`;

function Post() {
  const recentStories  = [];
  for (let i = 0; i < 4; i++) {
    let { recentUser, recentStory } = recentData(5);
    if (recentStories.find(recentstory => recentstory.recentUser === recentUser )) {
      i--;
      continue;
    }
    recentStories.push({ recentUser, recentStory });
  }

  return (
    <>
      {recentStories.map(({ recentUser, recentStory }, index) => (
        <PostCard
          key={index}
          user={userData[recentUser]}
          story={userData[recentUser].posts[recentStory]}
        />
      ))}
      <BottomHeight />
    </>
  );
}

export default Post
