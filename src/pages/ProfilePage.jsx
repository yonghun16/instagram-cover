import React from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import userData from "../assets/data/userData";

/* UI Components */
import StatusBar from '../components/StatusBar';
import BottomNav from '../components/BottomNav';
import ProfileHeader from '../components/ProfileHeader';
import UserInfo from "../components/UserInfo";
import Highlights from "../components/Highlights";
import ActionButtons from "../components/ActionButtons";
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
      <UserInfo user={user} />
      <ActionButtons />
      <Highlights />
      <PostsGrid />
    </Container>
  );
}

export default ProfilePage
