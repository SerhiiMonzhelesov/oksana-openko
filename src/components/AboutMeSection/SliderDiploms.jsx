import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledSliderAboutSubtitle } from './About.styled';

const SliderDiploms = () => {
  return (
    <>
      <StyledSliderAboutSubtitle>
        Дипломи та Сертифікати
      </StyledSliderAboutSubtitle>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderDiploms;
