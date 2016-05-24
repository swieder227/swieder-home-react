import React from 'react';

const COVER = "cover";
const CONTAIN = "contain";

export default class LazyBackgroungImg extends React.Component {
  constructor() {
    super();

    this.state = {
      img_loaded: false
    }
  }

  static propTypes = {
    img_url: React.PropTypes.string.isRequired,
    bg_size: function(props, propName, componentName) {
      // validate that bg_size is correct CSS value: cover||contain
      if (props[propName] !== COVER && props[propName] !== CONTAIN) {
        return new Error( `Invalid prop ${propName} supplied to ${componentName}. Use either "${COVER}" or "${CONTAIN}".` );
      }
    },
  };
  static defaultProps = {
    bg_size: COVER,
  };

  componentDidMount() {
    this.lazyLoadImage();
  }

  imgLoadedCallback = () => {
    // Img is loaded, so update state and re-render
    this.setState({img_loaded: true});
    console.log("imgLoadedCallback", this.props.img_url);
  };

  lazyLoadImage(){
    // Fetch the img and trigger callback when complete
    var img = new Image();
    img.onload = this.imgLoadedCallback;
    img.src = this.props.img_url;
  }

  render() {
    
    let img_style = {
      backgroundImage: this.state.img_loaded ? `url(${this.props.img_url})` : '',
      backgroundSize: this.props.bg_size
    }

    return (
      <div className="lazy-background-img" style={img_style}/>
    )
  }
}