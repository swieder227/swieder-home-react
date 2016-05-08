import React from 'react';

export default class CaseStudyHero extends React.Component {
  constructor() {
    super();
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    summary: React.PropTypes.string.isRequired,
    anim_out_state: React.PropTypes.bool.isRequired
  };

  render() {

    let case_study_text_class = "case-study-hero__text";
    if(this.props.anim_out_state){
      case_study_text_class += " case-study-hero__text--fade-out"
    }

    return (
      <div className="case-study-hero">
        <div className={case_study_text_class}>
          <h1>{this.props.title}</h1>
          <h3>{this.props.summary}</h3>
        </div>
      </div>
    )
  }

}