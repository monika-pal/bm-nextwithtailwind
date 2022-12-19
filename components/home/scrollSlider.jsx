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
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next })
    };
    const ScrollSliderContent = [
      {
        id: 1,
        PostImg: '/assets/img/scrollSliderImage1.png',
        PostDate: 'November 8, 2022',
        PostHeading: 'Moglix expands its distribution footprint with 100 % acquisition of ADI India',
        PostURl: '#'
      },
      {
        id: 2,
        PostImg: '/assets/img/scrollSliderImage2.png',
        PostDate: 'November 8, 2022',
        PostHeading: 'Moglix On A Mission to give back to the Community of Armed Forces',
        PostURl: '#'
      },
      {
        id: 3,
        PostImg: '/assets/img/scrollSliderImage3.png',
        PostDate: 'November 8, 2022',
        PostHeading: 'Moglix Announces Executive Elevations, Strengthens Leadership As It Enters N…',
        PostURl: '#'
      },
      {
        id: 4,
        PostImg: '/assets/img/scrollSliderImage4.png',
        PostDate: 'November 8, 2022',
        PostHeading: 'Rahul Garg, CEO, Moglix: On A Mission To Impact 100 Million Lives By 2030',
        PostURl: '#'
      },
    ];
    return (
      <section className='bg-graybg py-sp-big'>
        <div className="container-none md:container lg:container mx-auto px-3">
        <h2 className='text-heading1 font-bold text-secondary text-center'>Step inside the world of Moglix</h2>
         <h3 className='text-lg font-regular text-secondary text-center'>Don’t miss out on our latest headlines and announcements.</h3>
          {/* <input
          onChange={e => this.slider.slickGoTo(e.target.value)}
          value={this.state.slideIndex}
          type="range"
          min={0}
          max={3}
        /> */}
          <div className='sliderName px-[30px]'>
            <div className="relative pt-1 flex justify-center mx-5">
              <div className="mt-6 w-[80%]" aria-hidden="true">
                <div className="overflow-hidden h-[12px] mb-4 text-xs flex rounded-[10px] bg-gray-light">
                  <div className='flex transition-all  ease-in-out duration-1000 ' style={{ width: `${33.3 * this.state.slideIndex}%` }}>
                    <div style={{ width: '40%' }} className=" shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progressColor1 transition-all ease-in-out duration-1000 "></div>
                    <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progressColor2 transition-all ease-in-out duration-1000 "></div>
                    <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progressColor3 transition-all ease-in-out duration-1000 "></div>
                    <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progressColor4 transition-all ease-in-out duration-1000 rounded-tr-[10px] rounded-br-[10px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <Slider ref={slider => (this.slider = slider)} {...settings}>
              {ScrollSliderContent.map((ScrollSliderPostData) =>
                <div className='min-h-[485px] bg-white' key={ScrollSliderPostData.id}>
                  <a className='block h-[485px] ' href="#">
                    <img src={ScrollSliderPostData.PostImg} alt="" />
                    <div className='scrollSliderCardHeight p-[30px]'>
                      <span className='text-date-grey text-sm mb-1'>{ScrollSliderPostData.PostDate}</span>
                      <p className='text-base2 font-semibold h-[80px]'>{ScrollSliderPostData.PostHeading}
                      </p>
                      <button
                        type="button"
                        className="inline-flex items-center rounded border-transparent py-1.5 text-base font-medium text-anchor-blue"
                      >
                     Read More <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(35,105,217,1)"/></svg>
                      </button>
                    </div>
                  </a>

                </div>
              )}
            </Slider>
            <button className='w-[230px] text-center justify-center items-center font-bold lg:text-base2 text-base text-white bg-brand h-[50px] flex shadow-[0 5px 10px rgba(217, 35, 45, 0.24)] hover:bg-brandhover mx-auto mt-10'><span className='mr-1'>Find More</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path fill="white" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/></svg></button>

          </div>
        </div>
      </section>
    )
  }
}
