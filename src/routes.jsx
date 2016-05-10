import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';
import {Router, Route, IndexRoute} from 'react-router';

import SplashPage from './components/SplashPage/SplashPage';
import PortfolioSlider from './components/PortfolioSlider/PortfolioSlider';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SplashPage} />
    <Route path="portfolio" component={PortfolioSlider} />
    {/*<Route path="connected" component={ExampleConnectedToStore} />
    <Route path="pure" component={ExamplePureContainer} />*/}
  </Route>
);
