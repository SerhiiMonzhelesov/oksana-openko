import styled from 'styled-components';

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
  font-family: 'IBMPlexSans-200';
  font-weight: 200;
  font-size: 32px;
  line-height: 1.25;
  color: var(--primery-text);
`;

//Video
export const StyledAboutVideoWrapper = styled.div`
  display: block;
  position: relative;
  margin-bottom: 40px;
  margin-left: auto;
  width: 329px;
  height: 470px;
  z-index: 10;
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
    border: 1px solid var(--primery-text);
    z-index: -1;
    @media screen and (min-width: 1440px) {
      bottom: 61px;
      right: 102px;
      width: 378px;
      height: 549px;
    }
  }
`;

export const StyledVideo = styled.video`
  width: 324px;
  height: 494px;
  @media screen and (min-width: 1440px) {
    width: 448px;
    height: 844px;
  }
`;

//Image
export const StyledAboutImgList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 56px;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const StyledImgBottom = styled.img`
  display: block;
  position: relative;
  z-index: 10;

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 210px;
    height: 209px;
    background-color: #887b79;
    z-index: -1;
  }
`;
export const StyledImgTop = styled.img`
  display: block;
  position: relative;
  z-index: 10;

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 153px;
    height: 157px;
    background-color: var(--bg-brown);
    z-index: -1;
  }
`;

//Text
export const StyledAboutList = styled.ul`
  display: grid;
  grid-gap: 24px;
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
