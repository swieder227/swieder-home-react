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

    this.state = {
      show_details: false
    }
  }

  static getStores(props) {
    return [PortfolioStore]
  }
  static getPropsFromStores(props) {
    var portfolio_state = PortfolioStore.getState();
    return {
      case_study_active: portfolio_state.case_study_active
    }
  }

  toggleShowDetails(){
    this.setState({
      show_details: !this.state.show_details
    });
  }

  render() {
    
    let title = <div key={this.props.case_study_active.title}>{this.props.case_study_active.title}</div>;

    let module_hero = <CaseStudyHero key={this.props.case_study_active.title} case_study_data={this.props.case_study_active} />;
    let module_details = this.state.show_details ? <CaseStudyDetails key={this.props.case_study_active.title} case_study_data={this.props.case_study_active} /> : '';

    return (
      <div className="portfolio-slider">        
          <div className="portfolio-slider__hero">
            <ReactCSSTransitionGroup transitionName="case-study-hero__slide" transitionEnterTimeout={600} transitionLeaveTimeout={600}>
              {module_hero}
            </ReactCSSTransitionGroup>
          </div>
          <div className="portfolio-slider__arrows">
            <button onClick={PortfolioActions.decrementCaseStudyActive}>Back</button>
            <button onClick={PortfolioActions.incrementCaseStudyActive}>Forward</button>
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