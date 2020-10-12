import React from 'react';
import { Login } from '../../components/Login/Login';

import { MainContainer } from '../../styles/main';

function LoginPage() {
  return (
    <MainContainer>
      <h1>Login</h1>
      <Login />
    </MainContainer>
  );
}

export default LoginPage;
