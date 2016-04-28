import React from 'react';

import {getPositionAtCenter} from '../../js/utils.js';

export default class CaseStudyDetailToggle extends React.Component {
  constructor() {
    super();
    
    this.position_start = {x: 0, y:0};
  }

  static propTypes = {
    show_details: React.PropTypes.bool.isRequired,
    click_callback: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    this.position_start = getPositionAtCenter(this.refs.main_btn);
  }

  getTranslateOffset(target_div){
  
    let main_btn = this.refs.main_btn;
    let btn_height = main_btn.offsetHeight;

    let pos_target = getPositionAtCenter(this.refs.target_btn);

    let translate_y = (pos_target.y - this.position_start.y) / btn_height * 100;

    return translate_y;
  }

  handleClick(){
    this.props.click_callback();
  }

  render() {

    let btn_text = this.props.show_details ? "Down" : "Up";

    let btn_translate_y = this.props.show_details ? this.getTranslateOffset() : 0;    
    let main_btn_style = {
      "transform": `translateY(${btn_translate_y}%)`
    };

    return (
      <div className="detals-toggle">
        <button className="detals-toggle__main-btn" ref="main_btn" style={main_btn_style} onClick={this.handleClick.bind(this)}>{btn_text}</button>
        <div className="detals-toggle__target" ref="target_btn" />
      </div>
    )
  }

}