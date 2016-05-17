import React from 'react';

import {shuffleArray} from '../../js/utils.js';

export default class Introduction extends React.Component {
  constructor() {
    super();

    this.names = ["a Creative", "a Coder", "an Innovator", "a Problem-Solver", "a Tinkerer", "a Collaborator", "a UX Expert", "Foo", "Bar", "Awesome"];
    shuffleArray(this.names);
    
  }

  render() {

    let names = this.names.map( (name, index) => {
      return <div key={name} className="introduction__name">{name}</div>
    });

    return (
      <div className="introduction">
        <div className="introduction__sw-img" />
        <div className="introduction__text-contain">
          <div className="introduction__header">SUP</div>
          <div className="introduction__subheading">I'm Seth Wieder</div>
          <div className="introduction__name-translate">
            {names}
          </div>
        </div>
      </div>
    )
  }

}