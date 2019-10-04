import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import LandingPage from '../pages/home';
import Blog from '../pages/blog';
import SinglePost from '../pages/blog/singlePost';
import Portfolio from '../pages/portfolio';
import SinglePortfolio from '../pages/portfolio/singlePortfolio';
import About from '../pages/about';
import Footer from './footer';

import styled from 'styled-components';

class Main extends Component {
  render() {
    const { location } = this.props;
    console.log(this.props);
    return (
      <Wrapper>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{enter: 1000, exit: 1000}}
            classNames={"fade"}
          >
            <section className="route-section">
              <Switch location={location}>
                <Route exact path="/portfolio/:id" component={SinglePortfolio} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/blog/:id" component={SinglePost} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/ueber-uns" component={About} />
                <Route exact path="/" component={LandingPage} />
              </Switch>
              <Route path="/" component={Footer} />
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Wrapper>
    )
  }
};

export default withRouter(Main);

const Wrapper = styled.div`
  background-color: white;

  section.route-section {
    background-color: white;
  }
`;
