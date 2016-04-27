import alt from '../alt';

class PortfolioActions {
  updateCaseStudyActive(index) {
    return index;
  }
  incrementCaseStudyActive() {
    return true;
  }
  decrementCaseStudyActive() {
    return true;
  }
}

module.exports = alt.createActions(PortfolioActions);