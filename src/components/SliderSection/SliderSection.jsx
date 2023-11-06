import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import data from '../../data/reviewsData';
import { motion } from 'framer-motion';

function App() {
  // for text strech
  const textVariants = {
    normal: {
      scaleX: 1,
      transition: {
        duration: 0.2,
      },
    },
    stretched: {
      scaleX: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div className="text-whitePrimary  px-7 md:px-24 py-8 lg:py-14 flex flex-col gap-8 bg-right">
      <div className="flex flex-col justify-center items-center gap-8">
        {/* heading section */}
        <h2 className="text-3xl md:text-5xl font-bold capitalize text-gradient inline-flex">
          clients review
        </h2>
        {/* title section */}
        <motion.div
          whileHover="stretched"
          initial="normal"
          variants={textVariants}
          className="tap-transp"
        >
          <div className="text-2xl lg:text-3xl mt-5 cursor-pointer capitalize text-center">
            See how I help my client&apos;s businesses and their gratitude.
          </div>
        </motion.div>
      </div>

      {/* sliders section */}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container mt-5 md:mt-10 w-full lg:w-auto"
      >
        {data.map((dataItem) => (
          <SwiperSlide
            className="w-[90%] md:w-[45%] lg:w-[26%] glassy-div font-inter p-5 rounded-md text-lightGrey mx-2 md:mx-0"
            key={dataItem.imageUrl}
          >
            <div className="flex flex-col justify-center gap-5 items-center">
              <div className="quotes w-full">
                <i className="fa-solid fa-quote-left fa-2xl text-gradient p-3 px-0"></i>
              </div>
              <div className="review text-center">{dataItem.review}</div>
              <div className="image w-24 text-center items-center  flex justify-center rounded-full">
                <img
                  src={dataItem.imageUrl}
                  alt="reviewee-image"
                  className="rounded-full"
                />
              </div>
              <div className="info flex flex-col justify-center items-center capitalize">
                <span>
                  <i>
                    {' '}
                    <span className="text-gradient text-xl font-semibold">
                      ~
                    </span>{' '}
                    {dataItem.profession}
                  </i>
                </span>
                <span>
                  <i>{dataItem.location}</i>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler mt-10">
          <div className="swiper-button-prev slider-arrow max-h-6  md:w-auto text-gradient tap-transp">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow max-h-6 md:w-auto text-gradient tap-transp">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
