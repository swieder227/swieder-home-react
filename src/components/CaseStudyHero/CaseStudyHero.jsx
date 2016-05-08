import React from 'react';

export default class CaseStudyHero extends React.Component {
  constructor() {
    super();
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    summary: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="case-study-hero">
        <div className="case-study-hero__text">
          <h1>{this.props.title}</h1>
          <h3>{this.props.summary}</h3>
        </div>
      </div>
    )
  }

}