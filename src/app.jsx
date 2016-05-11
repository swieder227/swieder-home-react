import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Main React UI Element
export default class App extends React.Component {
  render() {
    return (
      <div>
        
        {/* Static. E.g. may be replaced with a <Header /> Component */}
        {/*<GlobalNav history={this.props.history} />*/}
        
        {/* Dynamic content decided by the Router */}
        <div id="site__router">
        <ReactCSSTransitionGroup transitionName="react-css--slide-up" transitionEnterTimeout={1600} transitionLeaveTimeout={1600}>
          {
            React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })
          }
        </ReactCSSTransitionGroup>
        </div>

      </div>
    )
  }
}