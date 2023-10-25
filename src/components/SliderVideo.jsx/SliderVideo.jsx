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
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  PlayToggle,
} from 'video-react';

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
      <SwiperSlide>
        <StyledPlayer
          width="342"
          height="376"
          src="https://res.cloudinary.com/dlpvvcdpd/video/upload/v1698178334/speaker_1_bnbuje.mp4"
        >
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
            <VolumeMenuButton disabled />
            <PlayToggle />
          </ControlBar>
        </StyledPlayer>
      </SwiperSlide>
      <SwiperSlide>
        <StyledPlayer
          width="342"
          height="376"
          src="https://res.cloudinary.com/dlpvvcdpd/video/upload/v1698178343/speaker_2_vimant.mp4"
        >
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
            <VolumeMenuButton disabled />
            <PlayToggle />
          </ControlBar>
        </StyledPlayer>
      </SwiperSlide>
      <SwiperSlide>
        <StyledPlayer
          width="342"
          height="376"
          src="https://res.cloudinary.com/dlpvvcdpd/video/upload/v1698178337/speaker_3_jxwx7v.mp4"
        ></StyledPlayer>
      </SwiperSlide>
    </StyledSwiperVideo>
  );
}

export const StyledSwiperVideo = styled(Swiper)`
  display: flex;
  width: 100%;
  height: 100%;

  .swiper-slide {
    max-height: 376px;
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
    }
  }
`;

//Player
export const StyledPlayer = styled(Player)`
  background: transparent;
  &&.video-react-big-play-button {
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
  }
  &&.video-react-has-started &&.video-react-control-bar {
  }
`;
