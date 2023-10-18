import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Zoom,
} from 'swiper/modules';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

const SliderVideo = () => {
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
    <StyledSwiperVideo
      modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard, Zoom]}
      pagination={{ clickable: true }}
      breakpoints={breakpoints}
      keyboard={{ enabled: true }}
      centeredSlides={true}
    >
      <SwiperSlide>
        <video
          width="342"
          height="376"
          src="https://res.cloudinary.com/dfqclpulu/video/upload/v1697630980/imcyxbfoff1qo9tubmhk.mp4"
          controls
        ></video>
      </SwiperSlide>
      <SwiperSlide>
        <video
          width="342"
          height="376"
          src="https://res.cloudinary.com/dfqclpulu/video/upload/v1697631006/bgdgvdnnzdna6l6a40cu.mp4"
          controls
        ></video>
      </SwiperSlide>
      <SwiperSlide>
        <video
          width="342"
          height="376"
          src="https://res.cloudinary.com/dfqclpulu/video/upload/v1697630996/h9wraxeuj6ddeyyg0gzq.mp4"
          controls
        ></video>
      </SwiperSlide>
    </StyledSwiperVideo>
  );
};

export default SliderVideo;

export const StyledSwiperVideo = styled(Swiper)`
  display: flex;
  width: 100%;
  height: 100%;
  .swiper-slide {
    video {
      width: 100%;
      height: 376px;
      object-fit: cover;
    }
  }
  //pagination
  .swiper-pagination {
    left: 50%;
    transform: translateX(-50%);
    width: 74px;
    height: 22px;
    border-radius: 20px;
    background: rgba(242, 241, 243, 0.68);
  }
  .swiper-pagination-bullet {
    margin: 0 12px;
    width: 14px;
    height: 14px;
    border: 1px solid #777e90;
    background-color: #f2f1f3;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--bg-primery);
  }
`;
