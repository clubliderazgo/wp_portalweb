import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Single from './components/single/Single';

const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:page" component={Single} />
      <Route path="/:page/:slug" component={Single} />         
      {/* <Route path="/page/:slug" component={Single} />    
      <Route path="/post/:slug" component={Single} />
      <Route path="/search/:term" component={Archive} />
      <Route component={Notfound} />  */}
    </Switch>
  </Router>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);

