import React from 'react';

import {shuffleArray} from '../../js/utils.js';

import LoaderCircle from '../LoaderCircle/LoaderCircle';

export default class Introduction extends React.Component {
  constructor() {
    super();

    this.names = ["a Creative", "an Engineer", "an Innovator", "a Problem-Solver", "a Collaborator", "a UX Designer", "a Technologist", "a Software Architect", "a Brogrammer"];
    shuffleArray(this.names);
    this.names.unshift("still loading...");
  }

  render() {

    let names = this.names.map( (name, index) => {
      return <div key={name} className="introduction__name">{name}</div>
    });

    return (
      <div className="introduction">
        <div className="introduction__sw-img">
          <LoaderCircle width="120%" height="120%" left="-10%" top="-10%" />
        </div>
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