import Container from 'components/Container/Container';
import {
  StyledAboutImgList,
  StyledAboutMeSection,
  StyledAboutTitle,
  StyledImgBottom,
  StyledImgTop,
  StyledVideo,
} from './About.styled';
import AboutText from './AboutText';
import SliderDiploms from './SliderDiploms';

import React from 'react';
// import about from '../../assets/video/aboutMe.MOV';

export default function AboutMeSection() {
  return (
    <>
      <StyledAboutMeSection id="about-me">
        <Container>
          <StyledVideo
            width="324"
            height="494"
            type="video/mp4"
            playsInline
            // src={about}
          />

          <StyledAboutTitle>Про мене</StyledAboutTitle>
          <StyledAboutImgList>
            <li>
              <StyledImgTop />
              <div></div>
            </li>
            <li>
              <StyledImgBottom />
            </li>
          </StyledAboutImgList>
          <AboutText />
          <SliderDiploms />
        </Container>
      </StyledAboutMeSection>
    </>
  );
}
