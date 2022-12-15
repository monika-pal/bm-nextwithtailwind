import React, { Component } from 'react'
import Slider from "react-slick";
var document = require("global/document")
export default class scrollSlider extends Component {
  constructor(props){
    super(props);
    this.slide = this.slide.bind(this);
}
slide(y){
  y > 0 ? (
     this.slider.slickNext()
  ) : (
     this.slider.slickPrev()
  )
}
componentWillMount(){
  document.addEventListener('wheel', (e) => {
        this.slide(e.wheelDelta);
    })
}
  state = {
    slideIndex: 0,
    updateCount: 0
  };
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        margin : 10,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: () =>
          this.setState(state => ({ updateCount: state.updateCount + 1 })),
        beforeChange: (current, next) => this.setState({ slideIndex: next })
      };
    return (
      <div>
         <input
          onChange={e => this.slider.slickGoTo(e.target.value)}
          value={this.state.slideIndex}
          type="range"
          min={0}
          max={3}
        />
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <img src={"/assets/img/sampleImg1.jpg"} />
          </div>
          <div>
          <img src={"/assets/img/sampleImg2.jpg"} />
          </div>
          <div>
          <img src={"/assets/img/sampleImg3.jpg"} />
          </div>
          <div>
          <img src={"/assets/img/sampleImg2.jpg"} />
          </div>
          <div>
          <img src={"/assets/img/sampleImg1.jpg"} />
          </div>
          <div>
          <img src={"/assets/img/sampleImg2.jpg"} />
          </div>
          <div>
          <img src={"/assets/img/sampleImg3.jpg"} />
          </div>
          <div>
          <img src={"/assets/img/sampleImg.jpg"} />
          </div>
        </Slider>
      </div>
    )
  }
}
