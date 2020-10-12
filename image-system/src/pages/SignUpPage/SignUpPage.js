import React from 'react';
import { SignUp } from '../../components/SignUp/SignUp';

import { MainContainer } from '../../styles/main';

function SignUpPage() {
  return (
    <MainContainer>
      <h1>Cadastro</h1>
      <SignUp />
    </MainContainer>
  );
}

export default SignUpPage;
