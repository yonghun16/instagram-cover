import React from "react";
import styled from "styled-components";
import storyRing from '../../assets/avatar/Story_ring.png';
import knownFollowersAvatars from '../../assets/avatar/knownfollowers_example.png';


/* Styled Components */
const Header = styled.div`
  padding: 0 16px;
  background-color: white;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StoryRingWrapper = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${props => (props.$hasRing ? `url(${storyRing})` : 'none')};
  background-size: cover;
`;

const ProfileImage = styled.div`
  width: ${props => (props.$hasRing ? '75px' : '85px')};
  height: ${props => (props.$hasRing ? '75px' : '85px')};
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.$src});
`;

const Stats = styled.div`
  font-size: 0.95rem;
  display: flex;
  padding-right: 15px;
  justify-content: space-between;
  gap: 25px;
  & > div {
    text-align: center;
  }
  & > div > div:nth-child(1) {
    font-weight: bold;
    margin-bottom: -4px;
  }
  & > div > div:nth-child(2) {
    font-size: 0.90rem;
    color: #3e3e3e;
  }
}
`;

const UserExplain = styled.div`
  margin-top: 12px;
  line-height: 1.4;

  span {
    font-weight: bold;
  }

  a {
    color: #00376b;
    text-decoration: none;
  }
`;

const FoloowersInfo = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FollowedAvatars = styled.img`
  width: 60px;
`;

const Username = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const IntroHashTag = styled.div`
  font-size: 14px;
`;

const LinkHere = styled.div`
  font-size: 14px;
  color: #00376b;
  font-weight: bold;
  margin-bottom: 5px;
`;

function UserInfo({ user }) {
  const userStats = ["Posts", "Followers", "Following" ]

  return (
    <Header>
      <Row>
        <StoryRingWrapper $hasRing={user.newStory}>
          <ProfileImage $hasRing={user.newStory} $src={user.image} />
        </StoryRingWrapper>
      <Stats>
        {userStats.map((stat, i) => (
          <div key={i}>
            <div>{user[stat.toLowerCase()].toLocaleString()}</div>
            <div>{stat}</div>
          </div>
        ))}
      </Stats>
      </Row>
      <UserExplain>
        <Username>{user.name}</Username>
        <IntroHashTag>
          {user.intro} {user.hashTag.map((tag, i) => <a href="#" key={i}>{tag} </a>)}
        </IntroHashTag>
        <LinkHere>
          <a href="#">Link goes here</a>
        </LinkHere>
        <FoloowersInfo>
        <FollowedAvatars src={knownFollowersAvatars} alt="Followed Avatars"/>
        <div>
          <small>Followed by <strong>{user.knownFollower}</strong> and <strong>{user.knownFollowerCount.toLocaleString()} others</strong></small>
        </div>
        </FoloowersInfo>
      </UserExplain>
    </Header>
  );
}

export default UserInfo;
