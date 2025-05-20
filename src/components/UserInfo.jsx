import React from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import userData from "../assets/data/userData";


/* Styled Components */
const Header = styled.div`
  padding: 0 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  border: 3px solid #ff8501;
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

const Bio = styled.div`
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
  return (
    <Header>
      <Row>
        <ProfileImage $src={user.image} />
        <Stats>
          <div>
            <div>{user.posts.toLocaleString()}</div>
            <div>Posts</div>
          </div>
          <div>
            <div>{user.followers.toLocaleString()}</div>
            <div>Followers</div>
          </div>
          <div>
            <div>{user.following.toLocaleString()}</div>
            <div>Following</div>
          </div>
        </Stats>
      </Row>
      <Bio>
        <Username>{user.name}</Username>
        <IntroHashTag>
          {user.intro} {user.hashTag.map((tag, i) => <a href="#" key={i}>{tag} </a>)}
        </IntroHashTag>
        <LinkHere>
          <a href="#">Link goes here</a>
        </LinkHere>
        <div>
          <small>Followed by <strong>{user.name}</strong> and <strong>{user.knownFollowers.toLocaleString()} others</strong></small>
        </div>
      </Bio>
    </Header>
  );
}

export default UserInfo;
