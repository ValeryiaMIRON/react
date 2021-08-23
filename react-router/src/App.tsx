/* eslint-disable no-template-curly-in-string */
import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import './styles.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Dashboard from './pages/Dashboard';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Details from './components/details/Details';

const PagesAll: FC = () => {
  const location = useLocation();

  return (
    <div className="сontainer">
      <TransitionGroup>
        <CSSTransition timeout={500} classNames="page" key={location.key}>
          <Switch location={location}>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>

            <Route path="/details/:author">
              <Details />
            </Route>
            <Route path="/error">
              <NotFound />
            </Route>
            <Redirect to="/error">
              <NotFound />
            </Redirect>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export const App: FC = () => {
  return (
    <Router>
      <div className="app">
        <PagesAll />
      </div>
    </Router>
  );
};

export default App;
