import Slider from 'react-slick';
import {useEffect, useRef} from 'react';

import ConnectImage from 'client/pages/components/mono/connect/ConnectImage';
import ConnectDetails from 'client/pages/components/mono/connect/ConnectDetails';
import useConnectInfoStore from 'client/store/connectIntroStore';

type ConnectProps = {
  details?: Array<any>;
  index?: number;
};

const ConnectSlider = ({details, index}: ConnectProps) => {
  const connectInfoStore = useConnectInfoStore((state: any) => state);
  const slider: any = useRef(null);
  const connectSliderSettings = {
    mobileFirst: true,
    dots: true,
    arrows: false,
    centerMode: true,
    infinite: false,
    centerPadding: '0px',
    slidesToShow: 1,
    speed: 300,
    slidesToScroll: 1,
    initialSlide: 0,
    swipe: true,
    swipeToSlide: false,
    className: 'connect_slider',
    appendDots: (dots: any) => <ul>{dots}</ul>,
    beforeChange: (current: any, next: any) =>
      connectInfoStore.setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    slider.current.slickGoTo(index);
  }, [index]);

  return (
    <Slider {...connectSliderSettings} ref={slider}>
      {details?.map((element: any, i) => {
        return (
          <div key={i}>
            <div className="mb-12">
              <ConnectImage image={element.image} />
            </div>
            <div className="flex justify-center mx-6 mb-11">
              <ConnectDetails
                title={element.title}
                subtitle={element.subtitle}
              />
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
export default ConnectSlider;
