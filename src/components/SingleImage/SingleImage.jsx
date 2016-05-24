import React from 'react';

import LazyBackgroungImg from '../LazyBackgroungImg/LazyBackgroungImg';

export default class SingleImage extends React.Component {
  constructor() {
    super();
  }

  static propTypes = {
    url: React.PropTypes.string.isRequired,
    bg_size: React.PropTypes.string.isRequired
  };

  render() {
    
    let img_style = {
      backgroundImage: `url(${this.props.url})`
    }

    return (
      <div className="single-image">
        <LazyBackgroungImg bg_size={this.props.bg_size} img_url={this.props.url} />
      </div>
    )
  }

}