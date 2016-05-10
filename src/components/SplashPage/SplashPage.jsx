import React from 'react';

import {detectIsNode} from '../../js/utils.js';

import Introduction from '../Introduction/Introduction';

export default class SplashPage extends React.Component {
  constructor() {
    super();

    this.outstanding_queue = 0;

    this.min_time = 5000;
    this.min_time_fulfilled = false;
    this.max_time = 6000;
  }

  navigateOffSplash = () => {
    this.props.history.push("/portfolio");
  }

  checkCompletion = () => {
    if(this.outstanding_queue === 0 && this.min_time_fulfilled){
      this.navigateOffSplash();
    }
  }

  queueAdd = () => {
    this.outstanding_queue += 1;
    console.log("add", this.outstanding_queue);
  }

  queueRemove = () => {
    this.outstanding_queue -= 1;
    console.log("remove", this.outstanding_queue); 
    this.checkCompletion();
  }

  componentDidMount() {

    this.minTimeTimeout = window.setTimeout(() => {
      this.min_time_fulfilled = true;
      this.checkCompletion();
    }, this.min_time);

    

    window.splash = new Object;
    window.splash.queueAdd = this.queueAdd;
    window.splash.queueRemove = this.queueRemove;
  }

  render() {
    return (
      <div className="splash-page">
        <Introduction />
        {/*<div className="splash-page__img" />*/}
      </div>
    )
  }

}
