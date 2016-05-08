import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import connectToStores from 'alt-utils/lib/connectToStores';
import PortfolioStore from '../../js/stores/PortfolioStore';
import PortfolioActions from '../../js/actions/PortfolioActions';

import CaseStudyHero from '../CaseStudyHero/CaseStudyHero';
import CaseStudyDetails from '../CaseStudyDetails/CaseStudyDetails';
import DetailsToggle from '../DetailsToggle/DetailsToggle';

const _RTL = "_RightToLeft";
const _LTR = "_LeftToRight";

class PortfolioSlider extends React.Component {
  constructor() {
    super();

    this.slide_direction = _RTL;

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
    this.slide_direction = _LTR;
    PortfolioActions.decrementCaseStudyActive();
  }

  slideRight(){
    this.slide_direction = _RTL;
    PortfolioActions.incrementCaseStudyActive();  
  }

  render() {

    let module_hero = <CaseStudyHero key={this.props.case_study_active.id} {...this.props.case_study_active} />;
    let module_details = this.state.show_details ? <CaseStudyDetails key={this.props.case_study_active.id} {...this.props.case_study_active} /> : '';

    let slide_anim_name;
    if(this.slide_direction == _RTL){
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
          <div className="portfolio-slider__toggle-btn">
            <DetailsToggle click_callback={this.toggleShowDetails.bind(this)} show_details={this.state.show_details} />
          </div>
      </div>
    )
  }

}

export default PortfolioSlider = connectToStores(PortfolioSlider);