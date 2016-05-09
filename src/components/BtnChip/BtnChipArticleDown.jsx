import React from 'react';

import BtnChip from './BtnChip';

export default class BtnChipArticleDown extends BtnChip {
  constructor() {
    super();
  }

  // Subclasses can overwrite this part to add different body
  renderBody() {
    return (
      <g className="btn-chip__translate">
        <path d="M0,20.001v-1h13v1H0z M0,17.001h13v1H0V17.001z M0,15.001h13v1H0V15.001z M0,13.001h13v1H0
          V13.001z M8,6.002v-1h1v1H8z M7,7.001v1H6v-1H5V6.002h1V0.001h1v6.001h1v0.999H7z M4,5.002h1v1H4V5.002z M3,4.001h1v1.001H3V4.001z
           M9,4.001h1v1.001H9V4.001z M7.014,22.001H0v-1h7.014V22.001z"></path>
      </g>
    )
  }

}