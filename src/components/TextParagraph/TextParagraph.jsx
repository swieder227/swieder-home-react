import React from 'react';

export default class TextParagraph extends React.Component {
  constructor() {
    super();
  }

  static propTypes = {
    heading: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <h2>{this.props.heading}</h2>
        <p>
          {this.props.body}
        </p>
      </div>
    )
  }

}