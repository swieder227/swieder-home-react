import React from 'react';
//import GlobalNav from './components/GlobalNav/GlobalNav';

// Main React UI Element
export default class App extends React.Component {
  render() {
    return (
      <div>
        
        {/* Static. E.g. may be replaced with a <Header /> Component */}
        {/*<GlobalNav history={this.props.history} />*/}
        
        {/* Dynamic content decided by the Router */}
        {this.props.children}

      </div>
    )
  }
}