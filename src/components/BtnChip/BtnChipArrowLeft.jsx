import React from 'react';

import BtnChip from './BtnChip';

export default class BtnChipArrowLeft extends BtnChip {
  constructor() {
    super();
  }

  // Subclasses can overwrite this part to add different body
  renderBody() {
    return (
      <g>
        <rect x="16" y="20.002" width="0.999" height="0.998"></rect>
        <rect x="14.999" y="19" width="1.001" height="1.002"></rect>
        <rect x="16" y="14" width="0.999" height="0.999"></rect>
        <polygon points="21,17.999 21,16.999 14.999,16.999 14.999,16 14,16 14,16.999 13,16.999 13,17.999 14,17.999 14,19 14.999,19 
          14.999,17.999   "></polygon>
        <rect x="14.999" y="14.999" width="1.001" height="1.001"></rect>
      </g>
    )
  }

}

