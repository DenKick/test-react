import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

import Profile from './Pages/Profile';
import Doctors from './Pages/Doctors';
import Messages from './Pages/Messages';
import Testing from './Pages/Testing';
import Knowledge from './Pages/Knowledge';
import Help from './Pages/Help';
import ProfileOrders from './Pages/ProfileOrders';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/doctors">
          <Doctors />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/testing">
          <Testing />
        </Route>
        <Route path="/knowledge">
          <Knowledge />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/profile/orders">
            <ProfileOrders />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
