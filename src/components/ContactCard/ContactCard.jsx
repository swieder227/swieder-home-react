import React from 'react';

import BtnChipContact from '../BtnChip/BtnChipContact';

export default class ContactCard extends React.Component {
  constructor() {
    super();

    this.state = {
      is_open: false
    }
  }

  toggleOpenState(){
    this.setState({
      is_open: !this.state.is_open
    });
  }

  render() {

    let content_classname = "contact-card__content";
    if(this.state.is_open){
      content_classname += " contact-card__content--open"
    }

    return (
      <div className="contact-card">
        <div className={content_classname}>
          <div className="contact-card__bg"></div>
          <div className="contact-card__info"> 
            <h2>Get in contact</h2>
            <div className="case-study-details__info-row">
              <p className="case-study-details__info-type">Email</p>
              <a href="mailto:contact@sethwieder.com" target="_blank"><p className="case-study-details__info-value">contact@sethwieder.com</p></a>
            </div>
            <div className="case-study-details__info-row">
              <p className="case-study-details__info-type">Twitter</p>
              <a href="https://twitter.com/swieder227" target="_blank"><p className="case-study-details__info-value">@swieder227</p></a>
            </div>
            <div className="case-study-details__info-row">
              <p className="case-study-details__info-type">Resume</p>
              <a href="assets/sethwieder_resume.pdf" target="_blank" className="site__button">Download .pdf</a>
            </div>
          </div>
        </div>
        <BtnChipContact view_box="-42 0 250 65" clickCallback={this.toggleOpenState.bind(this)}/>
      </div>
    )
  }

}