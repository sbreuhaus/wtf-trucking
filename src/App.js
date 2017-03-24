import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Main from './containers/Main.js';
import Nav from './components/Nav.js'


const App = () => (
  <Router>
    <div>
      <Nav/>
      <Route path="/" component={Main}/>
    </div>
  </Router>
)

export default App;
