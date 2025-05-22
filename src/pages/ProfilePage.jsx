import React, { useState, useEffect } from "react";
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
  height: 100vh;
  max-width: 400px;
  background: white;
  margin: 0 auto;
`;

function ProfilePage() {
  const [userObject, setUserObject] = useState({});
  const { username } = useParams();

  useEffect(() => {
    setUserObject(userData.find(user => user.name === username));
  }, []);

  return (
  <Container>
    {userObject.name ? (
      <>
        <ProfileHeader user={userObject} />
        <UserInfo user={userObject} />
        <ActionButtons />
        <Highlights user={userObject} />
        <GridTabBar />
        <PostsGrid user={userObject} />
      </>
    ) : (
      <p>Loading...</p>
    )}
  </Container>
  );

  // return (
  //   <Container>
  //     <ProfileHeader user={userObject} />
  //     <UserInfo user={userObject} />
  //     <ActionButtons />
  //     <Highlights user={userObject} />
  //     <GridTabBar />
  //     <PostsGrid user={userObject} />
  //   </Container>
  // );
}

export default ProfilePage
