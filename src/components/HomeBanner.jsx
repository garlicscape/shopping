import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/SliderItem.css';

const HomeBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className='mb-20'>
      <div className={`bg-cover bg-banner1 h-[32rem] relative`}>
        <div className='absolute top-40 text-center w-full text-gray-50'>
          <h2 className='text-5xl sm:text-6xl font-bold'>WELCOME TO</h2>
          <div className='flex justify-center mb-5 text-7xl sm:text-8xl font-bold'>
            <h2 className='text-sky-600'>SHOP</h2>
            <h2 className='text-sky-900'>US</h2>
          </div>
          <p className='m-auto text-xl bg-amber-500 w-80 h-8'>
            -best quality good products-
          </p>
        </div>
      </div>
      <div className={`bg-cover bg-banner2 h-[32rem] relative`}>
        <div className='absolute top-32 text-center w-full text-gray-50 text-7xl sm:text-8xl mb-2 font-bold'>
          <h2>Summer</h2>
          <h2>Sale</h2>
          <p className='text-2xl mt-5 bg-sky-800 '>07.15~08.31</p>
        </div>
      </div>
      <div className={`bg-cover bg-banner3 h-[32rem] relative`}>
        <div className='absolute top-32 text-center w-full text-gray-50 text-7xl sm:text-8xl mb-2 font-bold'>
          <h2>Fall/Winter</h2>
          <h2>Season</h2>
          <p className='text-2xl mt-5 m-auto bg-emerald-900 w-48 h-9'>
            comming soon
          </p>
        </div>
      </div>
    </Slider>
  );
};
export default HomeBanner;
