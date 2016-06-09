import alt from '../alt';

class PortfolioActions {
  constructor(){
    this.last_action_complete = true;
    this.action_duration = 1000;
  }

  updateCaseStudyActive(index) {
    return index;
  }
  incrementCaseStudyActive() {
    if(this.isSafeToIncrement()){
      return true;
    } else {
      return undefined;
    }
  }
  decrementCaseStudyActive() {
    if(this.isSafeToIncrement()){
      return true;
    } else {
      return undefined;
    }
  }
  isSafeToIncrement() {
    if(this.last_action_complete){
      this.last_action_complete = false;
      setTimeout(()=>{
        this.last_action_complete = true;
      }, this.action_duration);
      return true;
    } else {
      return false;
    }
  }
}

module.exports = alt.createActions(PortfolioActions);