import styled from 'styled-components';

/* import data */
import userData, { recentData } from '../assets/data/userData';
import PostCard from './PostCard';


/* Post styled components */
const BottomHeight = styled.div`
  height: 55px;
`;

function MainPost() {
  const recentStores = [];
  for (let i = 0; i < 4; i++) {
    let { recentUser, recentStory } = recentData(5);
    recentStores.push({ recentUser, recentStory });
  }

  return (
    <>
      {recentStores.map(({ recentUser, recentStory }, index) => (
        <PostCard
          key={index}
          user={userData[recentUser]}
          story={userData[recentUser].stories[recentStory]}
        />
      ))}
      <BottomHeight />
    </>
  );
}

export default MainPost
