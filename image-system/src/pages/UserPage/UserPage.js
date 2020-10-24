import React from 'react';
import { Header } from '../../components/Header/Header';
import { User } from '../../components/User/User';

import { MainContainer } from '../../styles/main';

function UserPage() {
  return (
    <MainContainer>
        <Header />
      <h1>User</h1>
      <User />
    </MainContainer>
  );
}

export default UserPage;
