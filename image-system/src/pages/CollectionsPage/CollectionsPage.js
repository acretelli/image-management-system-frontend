import React from 'react';
import { Header } from '../../components/Header/Header';
import useProtectedRoute from '../../hooks/useProtectedRoute';

import { MainContainer, TextLarge } from '../../styles/main';
import { AllCollections } from '../../components/AllCollections/AllCollections';

function CollectionsPage() {
    const token = useProtectedRoute();

  return (
    <MainContainer>
      <Header />
      <h1>Collections</h1>
      <TextLarge>See all collections created by users</TextLarge>
      <AllCollections />
    </MainContainer>
  );
}

export default CollectionsPage;
