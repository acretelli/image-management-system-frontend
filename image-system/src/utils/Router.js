import React from 'react';
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import CollectionPage from '../pages/CollectionPage/CollectionPage';
import CollectionsPage from '../pages/CollectionsPage/CollectionsPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import HomePage from '../pages/HomePage/HomePage';
import FeedPage from '../pages/FeedPage/FeedPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ExplorePage from '../pages/ExplorePage/ExplorePage';
import UserPage from '../pages/UserPage/UserPage';

const Router = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup">
              <SignUpPage />
          </Route>
          <Route exact path="/login">
              <LoginPage />
          </Route>
          <Route exact path="/">
              <HomePage />
          </Route>
          <Route exact path="/feed">
              <FeedPage />
          </Route>
          <Route exact path="/profile">
              <ProfilePage />
          </Route>
          <Route exact path="/users/:id">
              <UserPage />
          </Route>
          <Route exact path="/explore">
              <ExplorePage />
          </Route>
          <Route exact path="/collections">
              <CollectionsPage />
          </Route>
          <Route exact path="/collections/:id">
              <CollectionPage />
          </Route>
          <Route path="/">
              <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default Router;

const rootElement = document.getElementById("root");
ReactDOM.render(<Router />, rootElement);
