import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';
import {Router, Route, IndexRoute} from 'react-router';

import PortfolioSlider from './components/PortfolioSlider/PortfolioSlider.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PortfolioSlider} />
    {/*<Route path="connected" component={ExampleConnectedToStore} />
    <Route path="pure" component={ExamplePureContainer} />*/}
  </Route>
);
