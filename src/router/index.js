import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import LandingPage from '../pages/home';
import Blog from '../pages/blog';
import SinglePost from '../pages/blog/singlePost';

export class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/portfolio" component={LandingPage} />
        <Route exact path="/blog/:id" component={SinglePost} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    )
  }
};
