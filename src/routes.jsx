import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';
import {Router, Route, IndexRoute} from 'react-router';

import PreloadPage from './components/PreloadPage/PreloadPage';
import PortfolioSlider from './components/PortfolioSlider/PortfolioSlider';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PreloadPage} />
    <Route path="portfolio" component={PortfolioSlider} />
  </Route>
);
