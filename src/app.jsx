import React from 'react';
import {Link, IndexLink} from 'react-router';

// Main React UI Element
export default class App extends React.Component {
  render() {
    return (
      <div>
        
        {/* Static. E.g. may be replaced with a <Header /> Component */}
        
        
        {/* Dynamic content decided by the Router */}
        {this.props.children}

      </div>
    )
  }
}