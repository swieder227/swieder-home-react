import React from 'react';

import connectToStores from 'alt-utils/lib/connectToStores';
import PortfolioStore from '../../js/stores/PortfolioStore';

import {detectIsNode} from '../../js/utils.js';

import Introduction from '../Introduction/Introduction';

class SplashPage extends React.Component {
  constructor() {
    super();

    this.outstanding_queue = 0;

    this.min_time = 500;
    this.min_time_fulfilled = false;
    this.max_time = 3000;
  }

  static getStores(props) {
    return [PortfolioStore]
  }
  static getPropsFromStores(props) {
    return {
      preload_img_array: PortfolioStore.getState().case_studies.map((data) => data.hero_img)
    }
  }

  navigateOffSplash = () => {
    console.log("navigateOffSplash");
    this.props.history.push("/portfolio");
  }

  checkCompletion = () => {
    if(this.outstanding_queue === 0 && this.min_time_fulfilled){
      this.navigateOffSplash();
    }
  }

  preloadFonts() {
    this.queueAdd();

    // asynchronsly loads Google Fonts. `active` callback when complete
    window.WebFontConfig = {
        google: { families: ['Montserrat:400,700', 'Open Sans:400,300,700'] },
        classes: false,
        active: this.queueRemove
    };
    var wf = document.createElement('script'), s = document.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
    wf.async = 'true';
    s.parentNode.insertBefore(wf, s);
  }

  preloadImages() {
    // Preload 
    const img_array = this.props.preload_img_array;

    for (var i = 0; i < img_array.length; i++) {
      
      this.queueAdd();
      let img = new Image();
      img.src = img_array[i];
      img.onload = this.queueRemove();

    }
  }

  queueAdd = () => {
    this.outstanding_queue += 1;
  }

  queueRemove = () => {
    this.outstanding_queue -= 1;
    this.checkCompletion();
  }

  componentDidMount() {

    // Preload important assets. Fonts + Hero Images
    this.preloadFonts();
    this.preloadImages();

    // Create a timer that sets the min_time and re-checks load queue after fulfillment
    this.minTimeTimeout = window.setTimeout(() => {
      this.min_time_fulfilled = true;
      this.checkCompletion();
    }, this.min_time);

    // Create a timer always goes to next page after max_time
    this.maxTimeTimeout = window.setTimeout(() => {
      this.navigateOffSplash();
    }, this.max_time);

  }

  componentWillUnmount() {
    window.clearTimeout(this.minTimeTimeout);
    window.clearTimeout(this.maxTimeTimeout);
  }

  render() {
    return (
      <div className="splash-page">
        <Introduction />
      </div>
    )
  }

}

export default SplashPage = connectToStores(SplashPage);