import React from 'react';

export default class CaseStudyHero extends React.Component {
  constructor() {
    super();
  }

  static propTypes = {
    anim_out_state: React.PropTypes.bool.isRequired,
    heading: React.PropTypes.string.isRequired,
    subheading: React.PropTypes.string.isRequired
  };

  render() {

    let case_study_text_class = "case-study-hero__text";
    if(this.props.anim_out_state){
      case_study_text_class += " case-study-hero__text--fade-out"
    }

    return (
      <div className="case-study-hero">
        <div className={case_study_text_class}>
          <h1 className="case-study-hero__heading">{this.props.heading}</h1>
          <h3 className="case-study-hero__subheading">{this.props.subheading}</h3>
        </div>
      </div>
    )
  }

}