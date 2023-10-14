import React from 'react';
import { SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import { aboutSlider } from '../../data/dataAboutSlider';

import { StyledSliderAboutSubtitle, StyledSwiper } from './About.styled';

const SliderDiploms = () => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  };

  return (
    <>
      <StyledSliderAboutSubtitle>
        Дипломи та Сертифікати
      </StyledSliderAboutSubtitle>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
        pagination={{ clickable: true }}
        breakpoints={breakpoints}
        zoom={true}
        centeredSlides={true}
        keyboard={{ enabled: true }}
        loop={true}
      >
        {aboutSlider.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
};

export default SliderDiploms;
