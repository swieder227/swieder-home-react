import alt from '../alt';
import PortfolioActions from '../actions/PortfolioActions';

import {case_study_data} from '../../data/case_study_data';

class PortfolioStore {
  constructor() {
    this.case_studies = case_study_data;
    this.case_study_active_index = 0;
    this.case_study_active = this.case_studies[this.case_study_active_index];

    this.bindListeners({
      handleIncrementCaseStudyActive: PortfolioActions.incrementCaseStudyActive,
      handleDecrementCaseStudyActive: PortfolioActions.decrementCaseStudyActive,
    });
  }

  handleIncrementCaseStudyActive(){
    let index = this.case_study_active_index;
    if(index < this.case_studies.length - 1){
      index += 1;
    } else {
      index = 0;
    }
    this.case_study_active = this.case_studies[index];
    this.case_study_active_index = index;
  }
  handleDecrementCaseStudyActive(){
    let index = this.case_study_active_index;
    if(index > 0){
      index -= 1;
    } else {
      index = this.case_studies.length - 1;
    }
    this.case_study_active = this.case_studies[index];
    this.case_study_active_index = index;
  }


  
}

module.exports = alt.createStore(PortfolioStore, 'PortfolioStore');