/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import React, { FC, Suspense } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
// import Posts from './pages/Posts';
import './styles.scss';
import Dashboard from './pages/DashBoard';

const navData = [
  {
    Component: <Dashboard />,
    path: '/',
  },
  // {
  //   Component: <Posts />,
  //   path: '/posts',
  // },
];

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {navData.map(({ Component, path }): JSX.Element => {
              return (
                <Route path={path} exact key={path.toString()}>
                  {Component}
                </Route>
              );
            })}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
