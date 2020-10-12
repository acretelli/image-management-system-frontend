import React from 'react';
import { Header } from '../../components/Header/Header';
import { Profile } from '../../components/Profile/Profile';

import { MainContainer } from '../../styles/main';

function ProfilePage() {
  return (
    <MainContainer>
        <Header />
      <h1>Profile</h1>
      <Profile />
    </MainContainer>
  );
}

export default ProfilePage;
