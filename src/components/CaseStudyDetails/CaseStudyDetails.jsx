import React from 'react';

import TextParagraph from '../TextParagraph/TextParagraph';

export default class CaseStudyDetails extends React.Component {
  constructor() {
    super();
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    sections: React.PropTypes.array.isRequired
  };

  render() {

    let render_sections = this.props.sections.map( (section_data) => {
      // TODO: conditional for diff template types. Currently only 1 template.
      let {heading, body, ...other} = section_data;
      return <TextParagraph key={section_data.id} heading={heading} body={body} />
    });

    return (
      <div className="case-study-details">
        <h1>Detail Page {this.props.title}</h1>
        <hr/>
        {render_sections}
      </div>
    )
  }

}