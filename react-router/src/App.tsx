/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import React, { FC, Suspense } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
// import Posts from './pages/Posts';
import './styles.scss';
import { CSSTransition } from 'react-transition-group';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

const navData = [
  {
    Component: <Dashboard />,
    path: '/',
  },
  {
    Component: <About />,
    path: '/about',
  },
];

export const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <div className="container">
              {' '}
              {navData.map(({ Component, path }): JSX.Element => {
                return (
                  <Route path={path} exact key={path.toString()}>
                    {({ match }) => (
                      <CSSTransition
                        in={match != null}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                      >
                        <div className="page">{Component}</div>
                      </CSSTransition>
                    )}
                  </Route>
                );
              })}
            </div>

            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
