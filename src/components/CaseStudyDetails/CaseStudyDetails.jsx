import React from 'react';

import TextParagraph from '../TextParagraph/TextParagraph';
import SingleImage from '../SingleImage/SingleImage';

export default class CaseStudyDetails extends React.Component {
  constructor() {
    super();
  }

  static propTypes = {
    sections: React.PropTypes.array.isRequired,
    heading: React.PropTypes.string.isRequired,
    summary: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    client: React.PropTypes.string.isRequired,
    role: React.PropTypes.string.isRequired,
    launch_url: React.PropTypes.string
  };

  render() {

    // Loop over props.sections, creating submodules for each template type
    let render_sections = this.props.sections.map( (section_data) => {
      
      // support different template types
      switch(section_data.template){
        case "paragraph":
          let {heading, body, ...other} = section_data;
          return <TextParagraph key={section_data.id} heading={heading} body={body} />
        case "image":
          let {url, bg_size} = section_data;
          return <SingleImage key={section_data.id} url={url} bg_size={bg_size} />
        default:
          console.error("unknown section template");
      }
      
    });

    let launch_btn = this.props.launch_url ? <a className="site__button" href={this.props.launch_url} target="_blank">LAUNCH SITE</a> : <div className="site__button site__button--disabled">PUBLIC SITE UNAVAILABLE</div>;

    return (
      <div className="case-study-details">
        <div className="case-study-details__contain">
          <h1 className="case-study-details__title">{this.props.heading}</h1>
          <p className="case-study-details__summary">{this.props.summary}</p>
          <div className="case-study-details__info">
            <div className="case-study-details__info-row">
              <h5 className="case-study-details__info-type">Client</h5>
              <p className="case-study-details__info-value">{this.props.client}</p>
            </div>
            <div className="case-study-details__info-row">
              <h5 className="case-study-details__info-type">Role</h5>
              <p className="case-study-details__info-value">{this.props.role}</p>
            </div>
            <div className="case-study-details__info-row">
              <h5 className="case-study-details__info-type">Date</h5>
              <p className="case-study-details__info-value">{this.props.date}</p>
            </div>
          </div>
          {launch_btn}
          <div className="site__divider site__divider--case-study-info"/>
          {render_sections}
        </div>
      </div>
    )
  }

}