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

    // Add active state class to btn
    let btn_class = "details-toggle__main-btn"
    if(this.props.show_details){
      btn_class += " details-toggle__main-btn--open";
    }

    // Change text of btn based on state
    let btn_text = this.props.show_details ? "Close" : "Read More";

    // Calculate transform % and apply to btn
    let btn_translate_y = this.props.show_details ? this.getTranslateOffset() : 0;    
    let main_btn_style = {
      "transform": `translateY(${btn_translate_y}%)`
    };

    return (
      <div className="details-toggle">
        <div className={btn_class} ref="main_btn" style={main_btn_style} onClick={this.handleClick.bind(this)}>
          <div className="detail-toggle__text-contain">
            <div className="detail-toggle__text">
              {btn_text}
            </div>
          </div>
        </div>
        <div className="details-toggle__target" ref="target_btn" />
      </div>
    )
  }

}