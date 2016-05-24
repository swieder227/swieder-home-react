import React from 'react';

export default class LoaderCircle extends React.Component {
  constructor() {
    super();
  }

  static defaultProps = {
    width: 50,
    height: 50,
    left: 0,
    top: 0
  };

  render() {

    let circle_style = {
      width: this.props.width,
      height: this.props.height,
      left: this.props.left,
      top: this.props.top
    }

    return (
      <div className="loader-circle" style={circle_style}>
        <svg className="loader-circle__rotate" viewBox="25 25 50 50">
          <circle className="loader-circle__path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
        </svg>
      </div>
    )
  }

}