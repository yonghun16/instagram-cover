import React from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import userData from "../assets/data/userData";

/* UI Components */
import ProfileHeader from '../components/ProfileHeader';
import ProfileUserInfo from "../components/ProfileUserInfo";
import ProfileHighlights from "../components/ProfileHighlights";
import ProfileActionButtons from "../components/ProfileActionButtons";
import ProfileGridTabBar from "../components/ProfileGridTabBar";
import PostsGrid from "../components/PostsGrid";


/* Styled Components */
const Container = styled.div`
  max-width: 400px;
  background: white;
  margin: 0 auto;
`;

function ProfilePage() {
  const { username } = useParams();

  const user = userData.find(user => user.name === username);
  // console.log(user)  // 디버그용

  return (
    <Container>
      <ProfileHeader user={user} />
      <ProfileUserInfo user={user} />
      <ProfileActionButtons />
      <ProfileHighlights user={user} />
      <ProfileGridTabBar />
      <PostsGrid />
    </Container>
  );
}

export default ProfilePage
