import Container from 'components/Container/Container';
import {
  StyledAboutImgList,
  StyledAboutMeSection,
  StyledAboutTitle,
  StyledVideo,
  StyledWrapperImg,
  StyledWrapperImgBottom,
  StyledWrapperVideo,
} from './About.styled';
import AboutText from './AboutText';
import SliderDiploms from './SliderDiploms';

import React from 'react';
import about from '../../assets/video/about_me.mp4';
import imgTop from '../../assets/images/about-top.jpg';
import imgBottom from '../../assets/images/about-bottom.jpg';
import styled from 'styled-components';

export const Grid = styled.section`
  @media screen and (min-width: 768px) {
    display: grid;

    justify-content: space-between;
    gap: 38px;
    align-items: center;
    grid-template-areas:
      'images video'
      'images video'
      'title video'
      'text text';
  }
  @media screen and (min-width: 1440px) {
    grid-template-areas:
      'images video'
      'images video'
      'title video'
      'text video';
  }
`;

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

          <SliderDiploms />
        </Container>
      </StyledAboutMeSection>
    </>
  );
}
