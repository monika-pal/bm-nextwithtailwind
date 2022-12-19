import React, { Component } from 'react'
import Slider from "react-slick";
export default class scrollSlider extends Component {
    state = {
        slideIndex: 0,
        updateCount: 0
    };
    componentDidMount() {
        let slickListDiv = document.getElementsByClassName('slick-list')[0]
        slickListDiv.addEventListener('wheel', event => {
            event.preventDefault()
            event.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev()
        })
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            afterChange: () =>
                this.setState(state => ({ updateCount: state.updateCount + 1 })),
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        };
        return (
            <div className='sliderName'>
                {/* <input
          onChange={e => this.slider.slickGoTo(e.target.value)}
          value={this.state.slideIndex}
          type="range"
          min={0}
          max={3}
        /> */}
                <div className="relative pt-1 mx-5">
                    <div className="mt-6" aria-hidden="true">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-light">
                            <div className='flex' style={{ width: `${20 * this.state.slideIndex}%` }}>
                                <div style={{ width: '40%' }} className=" shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progressColor1"></div>
                                <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progressColor2"></div>
                                <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progressColor3"></div>
                                <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progressColor4"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>

            </div>
        )
    }
}
