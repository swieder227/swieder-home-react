import alt from '../alt';
import PortfolioActions from '../actions/PortfolioActions';

class PortfolioStore {
  constructor() {
    this.case_studies = [
      {
        title: "1 title"
      },
      {
        title: "2 title"
      },
      {
        title: "3 title"
      },
      {
        title: "4 title"
      }
    ];
    this.case_study_active_index = 0;
    this.case_study_active = this.case_studies[this.case_study_active_index];

    this.bindListeners({
      handleUpdateCaseStudyActive: PortfolioActions.updateCaseStudyActive,
      handleIncrementCaseStudyActive: PortfolioActions.incrementCaseStudyActive,
      handleDecrementCaseStudyActive: PortfolioActions.decrementCaseStudyActive,
      // handleAppendExample: ExampleActions.APPEND_EXAMPLE
    });
  }

  handleUpdateCaseStudyActive(index) {
    this.case_study_active = this.case_studies[index];
    this.case_study_active_index = index;
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