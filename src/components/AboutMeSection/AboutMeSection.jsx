import Container from 'components/Container/Container';
import {
  Grid,
  StyledAboutImgList,
  StyledAboutMeSection,
  StyledAboutTitle,
  StyledWrapperImg,
  StyledWrapperImgBottom,
  StyledWrapperVideo,
} from './About.styled';
import AboutText from './AboutText';
import React from 'react';
import about from '../../assets/video/about_me.mp4';
import imgTop from '../../assets/images/about-top.jpg';
import imgBottom from '../../assets/images/about-bottom.jpg';

import { aboutSlider } from 'data/dataAboutSlider';
import Slider from 'components/Slider/Slider';

export default function AboutMeSection() {
  return (
    <>
      <StyledAboutMeSection id="about-me">
        <Container>
          <Grid>
            <StyledWrapperVideo>
              <video
                width="324"
                controls={'controls'}
                height="494"
                type="video/mp4"
                playsInline
                src={about}
              />
            </StyledWrapperVideo>

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
          </Grid>

          <Slider
            title="Дипломи та Сертифікати"
            data={aboutSlider}
            isHomePage={true}
          />
        </Container>
      </StyledAboutMeSection>
    </>
  );
}
