import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Sidebar />
      <Header pageName="Мой профиль" />

      <Switch>
        <Route path="/profile">

        </Route>
        <Route path="/doctors">
          
        </Route>
        <Route path="/messages">
          
        </Route>
        <Route path="/testing">
          
        </Route>
        <Route path="/knowledge">
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
