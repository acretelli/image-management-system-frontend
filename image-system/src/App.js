import React, { useReducer } from 'react';
import AppContext from './context/AppContext';
import { appReducer, initialState } from './reducer/appReducer';
import Router from './utils/Router';

import { GlobalStyle } from './styles/global';

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ images: state.images, activeImage: state.activeImage, collections: state.collections, activeCollection: state.activeCollection, dispatch: dispatch }}>
      <GlobalStyle />
        <Router />
      </AppContext.Provider>
  );
}

export default App;
