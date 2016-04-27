import React from 'react';

export default class CaseStudyHero extends React.Component {
  constructor() {
    super();
  }

  // static propTypes = {
  //   : React.PropTypes.string
  // };

  render() {
    return (
      <div className="case-study-hero">
        {this.props.case_study_data.title}
      </div>
    )
  }

}