import React from 'react';

export default class CaseStudyHero extends React.Component {
  constructor() {
    super();
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="case-study-hero">
        {this.props.title}
      </div>
    )
  }

}