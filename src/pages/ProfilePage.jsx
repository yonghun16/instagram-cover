import React from "react";
import styled from "styled-components";

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
  return (
    <>
      <StatusBar />
      <Container>
        <ProfileHeader />
        <UserInfo />
        <ActionButtons />
        <Highlights />
        <PostsGrid />
      </Container>
      <BottomNav />
    </>
  );
}

export default ProfilePage
