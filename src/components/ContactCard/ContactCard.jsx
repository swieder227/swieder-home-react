import React from 'react';

import BtnChip from '../BtnChip/BtnChip';

export default class ContactCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="contact-card">
        <BtnChip />
        <div className="contact-card__content">
          <div className="contact-card__bg"></div>
        </div>
        
      </div>
    )
  }

}