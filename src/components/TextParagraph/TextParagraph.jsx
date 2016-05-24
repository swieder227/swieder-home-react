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

    let body_parse = this.props.body.split("\n").map((text)=>{
      return <p key={text.substr(0,10)}>{text}</p>
    });

    return (
      <div>
        <h2>{this.props.heading}</h2>
        {body_parse}
      </div>
    )
  }

}