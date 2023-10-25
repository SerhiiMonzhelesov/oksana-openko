import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
import { dataVideo } from '../../data/dataVideo';

export default function SliderVideo() {
  return (
    <StyledSwiperVideo
      modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard, Zoom]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      keyboard={{ enabled: true }}
      centeredSlides={true}
      loop={true}
    >
      {dataVideo.map((video, index) => (
        <SwiperSlide key={index}>
          <video width="342" height="376" src={video.src} controls></video>
        </SwiperSlide>
      ))}
    </StyledSwiperVideo>
  );
}

export const StyledSwiperVideo = styled(Swiper)`
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 32px !important;

  .swiper-slide {
    max-height: 376px;

    video {
      width: 342px;
      height: 376px;
      object-fit: cover;
    }
  }

  //pagination
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    left: 50%;
    transform: translateX(-50%);
    width: 74px;
    height: 22px;
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

  //Media Mob
  @media screen and (max-width: 767px) {
    .swiper-pagination {
      border-radius: 20px;
      background: rgba(242, 241, 243, 0.68);
    }
  }

  //Media Tablet
  @media screen and (min-width: 768px) {
    padding-bottom: 32px;

    .swiper-wrapper {
      height: 500px;
      padding-bottom: 32px;
    }
    .swiper-slide {
      max-height: 500px;
      video {
        width: 342px;
        height: 500px;
      }
    }
    .swiper-pagination {
      left: 50%;
      transform: translateX(-50%);
      width: 74px;
      height: 22px;
    }
  }

  //Media Desctop
  @media screen and (min-width: 1440px) {
    .swiper-wrapper {
      height: 656px;
    }
    .swiper-slide {
      max-height: 656px;
      video {
        width: 448px;
        height: 656px;
      }
    }
  }
`;
