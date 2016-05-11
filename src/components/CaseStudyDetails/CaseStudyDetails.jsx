import React from 'react';

import TextParagraph from '../TextParagraph/TextParagraph';

export default class CaseStudyDetails extends React.Component {
  constructor() {
    super();
  }

  static propTypes = {
    sections: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    client: React.PropTypes.string.isRequired,
    role: React.PropTypes.string.isRequired
  };

  render() {

    let render_sections = this.props.sections.map( (section_data) => {
      // support different template types
      switch(section_data.template){
        case "paragraph":
          let {heading, body, ...other} = section_data;
          return <TextParagraph key={section_data.id} heading={heading} body={body} />
        default:
          console.error("unknown section template");
      }
      
    });

    return (
      <div className="case-study-details">
        <div className="case-study-details__contain">
          <h1 className="case-study-details__title">{this.props.title}</h1>
          <div className="case-study-details__info">
            <div className="case-study-details__info-row">
              <p className="case-study-details__info-type">Client</p>
              <p className="case-study-details__info-value">{this.props.client}</p>
            </div>
            <div className="case-study-details__info-row">
              <p className="case-study-details__info-type">Role</p>
              <p className="case-study-details__info-value">{this.props.role}</p>
            </div>
            <div className="case-study-details__info-row">
              <p className="case-study-details__info-type">Date</p>
              <p className="case-study-details__info-value">{this.props.date}</p>
            </div>
          </div>
          <div className="site__divider site__divider--case-study-info"/>
          {render_sections}
        </div>
      </div>
    )
  }

}