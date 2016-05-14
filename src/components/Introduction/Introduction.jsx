import React from 'react';

import {shuffleArray} from '../../js/utils.js';

export default class Introduction extends React.Component {
  constructor() {
    super();

    this.names = ["a Creative", "a Coder", "an Innovator", "a Problem-Solver", "a Tinkerer", "a Collaborator", "a UX Expert"];
    shuffleArray(this.names);

    this.name_anim_duration = 1500;

    this.name_offset_height = 0;

    this.state = {
      name_incrementer: 0
    }
  }

  componentDidMount() {
    this.name_offset_height = this.refs.subheading.offsetHeight;

    this.incrementNames = window.setInterval(()=> {
      this.incrementToNextName();
    }, this.name_anim_duration);
  }

  componentWillUnmount() {
    window.clearInterval(this.incrementNames);
  }

  incrementToNextName(){
    if(this.state.name_incrementer < this.names.length - 1){
      this.setState({ name_incrementer: this.state.name_incrementer+1 });
    } else {
      window.clearInterval(this.incrementNames)
    }
  }

  render() {

    let names = this.names.map( (name, index) => {
      let name_class = "introduction__name";
      if((this.names.length - 1 - index) < this.state.name_incrementer) name_class += " introduction__name--past"
      if((this.names.length - 1 - index) > this.state.name_incrementer) name_class += " introduction__name--upcoming"
      return <div key={name} className={name_class}>{name}</div>
    });

    let translate_names_style = {
      "transform": `translateY(${this.state.name_incrementer * this.name_offset_height}px)`
    };

    return (
      <div className="introduction">
        <div className="introduction__sw-img" />
        <div className="introduction__text-contain">
          <div className="introduction__header">SUP</div>
          <div className="introduction__subheading" ref="subheading">I'm Seth Wieder</div>
          <div className="introduction__name-translate" style={translate_names_style}>
            {names}
          </div>
        </div>
      </div>
    )
  }

}