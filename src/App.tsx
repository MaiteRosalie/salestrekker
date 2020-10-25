import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ModalProvider } from './context';
import { HomePage, FormPage } from './pages';
import { ModalSuccess } from './components';
import './App.scss';

const App = () => (
  <ModalProvider>
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/form">
          <FormPage />
        </Route>
      </Switch>
    </Router>
    <ModalSuccess />
  </ModalProvider>
);

export default App;
