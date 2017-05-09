import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import CollegeList from './components/college-list/CollegeList.js';
import Home from './components/home/Home.js';
import CollegeDetail from './components/college-detail/CollegeDetail.js';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/colleges/:stateName/:page" component={CollegeList} />
      <Route path="/college/:schoolId" component={CollegeDetail} />
    </div>
  </Router>,
  document.getElementById('root')
);
