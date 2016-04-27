import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import connectToStores from 'alt-utils/lib/connectToStores';
import PortfolioStore from '../../js/stores/PortfolioStore';
import PortfolioActions from '../../js/actions/PortfolioActions';

import CaseStudyHero from '../CaseStudyHero/CaseStudyHero';

class PortfolioSlider extends React.Component {
  constructor() {
    super();
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

  render() {
    let title = <div key={this.props.case_study_active.title}>{this.props.case_study_active.title}</div>;
    return (
      <div className="portfolio-slider">        
          <h1>Portfolio!</h1>
          <div className="portfolio-slider__hero">
            <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
              <CaseStudyHero key={this.props.case_study_active.title} case_study_data={this.props.case_study_active} />
            </ReactCSSTransitionGroup>
          </div>
          <div className="portfolio-slider__ui">
            <button onClick={PortfolioActions.decrementCaseStudyActive}>Back</button>
            <button onClick={PortfolioActions.incrementCaseStudyActive}>Forward</button>
          </div>
      </div>
    )
  }

}

export default PortfolioSlider = connectToStores(PortfolioSlider);