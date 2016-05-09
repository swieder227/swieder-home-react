import React from 'react';

import BtnChip from './BtnChip';

export default class BtnChipArrowRight extends BtnChip {
  constructor() {
    super();
  }

  // Subclasses can overwrite this part to add different body
  renderBody() {
    return (
      <g>
        <rect x="17.001" y="14" width="0.999" height="0.998"></rect>
        <rect x="18" y="14.998" width="1.001" height="1.002"></rect>
        <rect x="17.001" y="20.001" width="0.999" height="0.999"></rect>
        <polygon points="13,17.001 13,18.001 19.001,18.001 19.001,19 20,19 20,18.001 21,18.001 21,17.001 20,17.001 20,16 19.001,16 
          19.001,17.001   "></polygon>
        <rect x="18" y="19" width="1.001" height="1.001"></rect>
      </g>
    )
  }

}

