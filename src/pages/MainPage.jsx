import React from 'react';
import styled from 'styled-components';

import StatusBar from '../components/StatusBar';
import Stories from '../components/Stories';


export const Container = styled.div`
  max-width: 400px;
  margin: auto;
  background: white;
  border: 1px solid #ddd;
  font-family: sans-serif;
`;

/* Header */
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

export const Logo = styled.h1`
  font-family: 'cursive';
  font-size: 24px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 10px;
  font-size: 18px;
`;

/* Post */
export const Post = styled.div`
  padding: 10px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const PostUserImage = styled.div`
  width: 32px;
  height: 32px;
  background: gray;
  border-radius: 50%;
  margin-right: 10px;
`;

export const PostUserInfo = styled.div``;

export const Username = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const Sponsored = styled.p`
  margin: 0;
  font-size: 12px;
  color: gray;
`;

export const PostImage = styled.div`
  width: 100%;
  height: 300px;
  background: #ccc;
  margin: 10px 0;
`;

export const PostActions = styled.div`
  display: flex;
  font-size: 20px;
  gap: 10px;
`;

export const RightIcon = styled.span`
  margin-left: auto;
`;

export const PostInfo = styled.div`
  font-size: 14px;
`;

export const Comments = styled.p`
  color: gray;
  font-size: 13px;
`;


const MainPage = () => {
  return (
    <Container>

      {/* StatusBar */}
      <StatusBar />

      {/* Header */}
      <Header>
        <Logo>Instagram</Logo>
        <Icons>
          <span>♡</span>
          <span>✉</span>
          <span>＋</span>
        </Icons>
      </Header>

      <Stories />

      {/* Post */}
      <Post>
        <PostHeader>
          <PostUserImage />
          <PostUserInfo>
            <Username>Ruffles</Username>
            <Sponsored>Sponsored</Sponsored>
          </PostUserInfo>
        </PostHeader>
        <PostImage />
        <PostActions>
          <span>♡</span>
          <span>💬</span>
          <span>✈</span>
          <RightIcon>🔖</RightIcon>
        </PostActions>
        <PostInfo>
          <p><strong>100 Likes</strong></p>
          <p><strong>Username</strong> Lorem ipsum dolor sit amet...</p>
          <Comments>View all 16 comments</Comments>
        </PostInfo>
      </Post>
    </Container>
  );
};

export default MainPage;
