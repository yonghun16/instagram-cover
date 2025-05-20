import React from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import userData from "../assets/data/userData";

/* UI Components */
import ProfileHeader from '../components/profile/ProfileHeader';
import UserInfo from "../components/profile/UserInfo";
import Highlights from "../components/profile/Highlights";
import ActionButtons from "../components/profile/ActionButtons";
import GridTabBar from "../components/profile/GridTabBar";
import PostsGrid from "../components/profile/PostsGrid";


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
      <UserInfo user={user} />
      <ActionButtons />
      <Highlights user={user} />
      <GridTabBar />
      <PostsGrid />
    </Container>
  );
}

export default ProfilePage
