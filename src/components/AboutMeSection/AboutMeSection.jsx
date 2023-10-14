import Container from 'components/Container/Container';
import {
  StyledAboutImgList,
  StyledAboutMeSection,
  StyledAboutTitle,
  StyledVideo,
  StyledWrapperImg,
  StyledWrapperImgBottom,
} from './About.styled';
import AboutText from './AboutText';
import SliderDiploms from './SliderDiploms';

import React from 'react';
import about from '../../assets/video/about_me.mp4';
import imgTop from '../../assets/images/about-top.jpg';
import imgBottom from '../../assets/images/about-bottom.jpg';

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
            src={about}
          />

          <StyledAboutTitle>Про мене</StyledAboutTitle>
          <StyledAboutImgList>
            <li>
              <StyledWrapperImg>
                <img src={imgTop} alt="Portrait of Sexologist" />
              </StyledWrapperImg>
            </li>
            <li>
              <StyledWrapperImgBottom>
                <img src={imgBottom} alt="Portrait of Sexologist" />
              </StyledWrapperImgBottom>
            </li>
          </StyledAboutImgList>
          <AboutText />
          <SliderDiploms />
        </Container>
      </StyledAboutMeSection>
    </>
  );
}
