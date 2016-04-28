import React from 'react';

import {Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import connectToStores from 'alt-utils/lib/connectToStores';
import PortfolioStore from '../../js/stores/PortfolioStore';
import PortfolioActions from '../../js/actions/PortfolioActions';

import CaseStudyHero from '../CaseStudyHero/CaseStudyHero';
import CaseStudyDetails from '../CaseStudyDetails/CaseStudyDetails';

class PortfolioSlider extends React.Component {
  constructor() {
    super();

    this.slide_direction = "_RightToLeft";

    this.state = {
      show_details: false
    }
  }

  static getStores(props) {
    return [PortfolioStore]
  }
  static getPropsFromStores(props) {
    return {
      case_study_active: PortfolioStore.getState().case_study_active
    }
  }

  toggleShowDetails(){
    this.setState({
      show_details: !this.state.show_details
    });
  }

  slideLeft(){
    this.slide_direction = "_LeftToRight";
    PortfolioActions.decrementCaseStudyActive();
  }

  slideRight(){
    this.slide_direction = "_RightToLeft";
    PortfolioActions.incrementCaseStudyActive();  
  }

  render() {

    let module_hero = <CaseStudyHero key={this.props.case_study_active.title} case_study_data={this.props.case_study_active} />;
    let module_details = this.state.show_details ? <CaseStudyDetails key={this.props.case_study_active.title} case_study_data={this.props.case_study_active} /> : '';

    let slide_anim_name;
    if(this.slide_direction == "_RightToLeft"){
      slide_anim_name = "case-study-hero__slide-rtl";
    } else {
      slide_anim_name = "case-study-hero__slide-ltr";
    }

    return (
      <div className="portfolio-slider">        
          <div className="portfolio-slider__hero">
            <ReactCSSTransitionGroup transitionName={slide_anim_name} transitionEnterTimeout={600} transitionLeaveTimeout={600}>
              {module_hero}
            </ReactCSSTransitionGroup>
          </div>
          <div className="portfolio-slider__arrows">
            <button onClick={this.slideLeft.bind(this)}>Back</button>
            <button onClick={this.slideRight.bind(this)}>Forward</button>
          </div>
          <div className="portfolio-slider__details">
            <ReactCSSTransitionGroup transitionName="case-study-details__slide" transitionEnterTimeout={600} transitionLeaveTimeout={600}>
              {module_details}
            </ReactCSSTransitionGroup>
          </div>
          <button className="portfolio-slider__details-toggle" onClick={this.toggleShowDetails.bind(this)}>Toggle</button>
      </div>
    )
  }

}

export default PortfolioSlider = connectToStores(PortfolioSlider);