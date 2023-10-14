import styled from 'styled-components';
import imgTopJPEG from '../../assets/images/about-top.jpg';
import imgTopWEBP from '../../assets/images/about-top.webp';
import imgBottomJPEG from '../../assets/images/about-bottom.jpg';
import imgBottomWEBP from '../../assets/images/about-bottom.webp';
import { Player } from 'video-react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'video-react/dist/video-react.css';

export const StyledAboutMeSection = styled.section`
  padding-top: 112px;
  padding-bottom: 112px;
  background-color: var(--bg-main);
  @media screen and (min-width: 768px) {
    padding-bottom: 80px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 136px;
    padding-bottom: 142px;
  }
`;

export const StyledAboutTitle = styled.h2`
  margin-bottom: 32px;
  grid-area: title;
  font-family: 'IBMPlexSans-200';
  font-weight: 200;
  font-size: 32px;
  line-height: 1.25;
  color: var(--primery-text);
`;

//Video

export const StyledWrapperVideo = styled.div`
  position: relative;
  grid-area: video;
  margin: 0 auto;
  width: 324px;
  height: 494px;

  z-index: 10;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 58px;
  }
  @media screen and (min-width: 1440px) {
    width: 378px;
    height: 549px;
  }
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    bottom: 76px;
    right: 13px;
    width: 329px;
    height: 470px;
    border: 1px solid var(--bg-primery);
    z-index: -1;

    @media screen and (min-width: 1440px) {
      bottom: 61px;
      right: 102px;
      width: 378px;
      height: 549px;
    }
  }
  //Video
  video {
    display: block;
    margin: 0 auto;

    object-fit: cover;
    width: 100%;
    height: 494px;
    z-index: 0;
    @media screen and (min-width: 1440px) {
      width: 448px;
      height: 844px;
    }
  }
`;

//Image
export const StyledAboutImgList = styled.ul`
  display: grid;
  grid-area: images;
  grid-template-areas: 'second first';
  margin-bottom: 84px;
  li:nth-child(1) {
    order: 2;
    grid-area: first;
    @media screen and (min-width: 768px) {
      padding-left: 10px;
    }
  }
  li:nth-child(2) {
    display: flex;
    order: 1;
    transform: translateY(28px);
    align-items: end;
    grid-area: second;
    z-index: 10;

    @media screen and (min-width: 768px) {
      grid-column-start: 2;
      align-items: start;
      transform: translate(-20px, 32px);
    }
  }

  @media screen and (min-width: 768px) {
    row-gap: 60px;
    grid-template-areas:
      'first '
      'second ';
    margin-bottom: 0;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const StyledWrapperImg = styled.div`
  position: relative;
  z-index: 1;
  width: 186px;
  height: 233px;

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: -11px;
    left: -11px;
    right: 13px;
    width: 210px;
    height: 209px;
    background-color: var(--bg-brown);
    z-index: -1;
  }
  @media screen and (min-width: 1440px) {
    width: 170px;
    height: 213px;
  }
`;

export const StyledWrapperImgBottom = styled(StyledWrapperImg)`
  width: 142px;
  height: 152px;
  @media screen and (min-width: 1440px) {
    width: 178px;
    height: 190px;
  }

  &::after {
    top: -32px;
    left: 13px;
    width: 153px;
    height: 157px;
  }
`;

//Text
export const StyledAboutList = styled.ul`
  display: grid;
  grid-gap: 24px;
  grid-area: text;
`;
export const StyledWrapperIntro = styled.div`
  display: grid;
  grid-gap: 12px;
`;
export const StyledAboutSubtitle = styled.h3`
  margin-bottom: 12px;
  font-family: 'ProximaNova-600';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  color: var(--main-text);
`;
export const StyledAboutSpan = styled.span`
  font-family: 'ProximaNova-700';
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;
  color: var(--main-text);
`;

export const StyledAboutAccentText = styled.p`
  margin-top: 40px;
  margin-bottom: 56px;
  font-family: 'ProximaNova-500';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--primery-text);
`;
export const StyledWrapperGames = styled.ul`
  display: grid;
  grid-gap: 8px;
`;

//Slider
export const StyledSliderAboutSubtitle = styled.h3`
  margin-bottom: 24px;
  font-family: 'ProximaNova-600';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  color: var(--main-text);
`;

export const StyledSwiper = styled(Swiper)`
  padding-bottom: 24px;
  .swiper-wrapper {
    padding-bottom: 24px;
  }
  .swiper-pagination-bullet {
    margin: 0 12px;
    width: 12px;
    height: 12px;
    border: 1px solid #777e90;
    background-color: #f2f1f3;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--bg-primery);
  }
  img {
    @media screen and (max-width: 767px) {
      margin: 0 auto;
    }
  }
`;
