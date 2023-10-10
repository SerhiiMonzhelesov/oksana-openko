import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

import { StyledSliderAboutSubtitle } from './About.styled';
import basic from '../../assets/images/slider-about/basic_ph.jpg';
import bodyAndEmotions from '../../assets/images/slider-about/body_and_emotions.jpg';
import trauma from '../../assets/images/slider-about/trauma_treatment.jpg';
import violence from '../../assets/images/slider-about/sexual-violence.jpg';

const SliderDiploms = () => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 28,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  };
  return (
    <>
      <StyledSliderAboutSubtitle>
        Дипломи та Сертифікати
      </StyledSliderAboutSubtitle>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={breakpoints}
        zoom={true}
      >
        <SwiperSlide>
          <img
            src={basic}
            alt="Sertificate Basics of psycological counseling"
            width="141"
            height="204"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={trauma}
            alt="Sertificate Phsycology of body in Trauma Treatment"
            width="141"
            height="204"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bodyAndEmotions}
            alt="Sertificate Body and Emotions in Trauma Treatment"
            width="141"
            height="204"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={violence}
            alt="Sertificate Combating Sexual Violence"
            width="344"
            height="203"
            loading="lazy"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderDiploms;
