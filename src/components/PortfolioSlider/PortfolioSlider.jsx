import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import connectToStores from 'alt-utils/lib/connectToStores';
import PortfolioStore from '../../js/stores/PortfolioStore';
import PortfolioActions from '../../js/actions/PortfolioActions';

import CaseStudyHero from '../CaseStudyHero/CaseStudyHero';
import CaseStudyDetails from '../CaseStudyDetails/CaseStudyDetails';
import DetailsToggle from '../DetailsToggle/DetailsToggle';
import BtnChip from '../BtnChip/BtnChip';

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

    // Render a module for the current case study based on active index
    // Pass in detail state for animation purposes
    let module_hero = <CaseStudyHero key={this.props.case_study_active.id} {...this.props.case_study_active} anim_out_state={this.state.show_details} />;
    
    // If show detail state is active,
    // Render the Details module, else render nothing and we'll animate in/out
    let module_details = this.state.show_details ? <CaseStudyDetails key={this.props.case_study_active.id} {...this.props.case_study_active} /> : '';

    // Name of the CSS animation class to use. Detect left||right
    let hero_anim_dir;
    if(this.slide_direction == _RTL){
      hero_anim_dir = "case-study-hero__slide-rtl";
    } else {
      hero_anim_dir = "case-study-hero__slide-ltr";
    }

    return (
      <div className="portfolio-slider">        
          <div className="portfolio-slider__hero">
            <ReactCSSTransitionGroup transitionName={hero_anim_dir} transitionEnterTimeout={700} transitionLeaveTimeout={700}>
              {module_hero}
            </ReactCSSTransitionGroup>
          </div>
          <div className="portfolio-slider__arrows">
            <BtnChip clickCallback={this.slideLeft.bind(this)} />
            <BtnChip clickCallback={this.slideRight.bind(this)} />
          </div>
          <div className="portfolio-slider__details">
            <ReactCSSTransitionGroup transitionName="case-study-details__slide" transitionEnterTimeout={1500} transitionLeaveTimeout={500}>
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