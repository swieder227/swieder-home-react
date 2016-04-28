import React from 'react';

export default class CaseStudyDetails extends React.Component {
  constructor() {
    super();
  }

  // static propTypes = {
  //   : React.PropTypes.string
  // };

  render() {
    return (
      <div className="case-study-details">
        Detailed Case Study For: {this.props.case_study_data.title}
      </div>
    )
  }

}