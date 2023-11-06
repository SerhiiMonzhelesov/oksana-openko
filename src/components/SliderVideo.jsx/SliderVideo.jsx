import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
} from 'swiper/modules';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import { dataVideo } from '../../data/dataVideo';

export default function SliderVideo() {
  return (
    <StyledSwiperVideo
      modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      keyboard={{ enabled: true }}
      centeredSlides={true}
      loop={true}
    >
      {dataVideo.map((video, index) => (
        <SwiperSlide key={index}>
          <video
            width="342"
            height="376"
            src={video.src}
            poster={video.poster}
            controls
            preload="none"
          ></video>
        </SwiperSlide>
      ))}
    </StyledSwiperVideo>
  );
}

export const StyledSwiperVideo = styled(Swiper)`
  display: flex;
  width: 100%;
  height: 404px;
  padding-bottom: 16px !important;

  .swiper-slide {
    max-height: 376px;

    video {
      width: 342px;
      height: 376px;
      object-fit: cover;
    }
  }
  .swiper-wrapper {
    height: 376px;
    padding-bottom: 16px;
  }

  //pagination
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 12px;
    left: 50%;
    transform: translateX(-50%);
  }
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    border: 1px solid #887b79;
    background-color: #f2f1f3;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--bg-primery);
  }

  //Media Tablet
  @media screen and (min-width: 768px) {
    height: 544px;
    padding-bottom: 32px !important;

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
    height: 700px;
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
