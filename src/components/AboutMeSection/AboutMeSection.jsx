import Container from 'components/Container/Container';
import {
  Grid,
  StyledAboutImgList,
  StyledAboutMeSection,
  StyledAboutTitle,
  StyledIframe,
  StyledWrapperImg,
  StyledWrapperImgBottom,
  StyledWrapperVideo,
} from './About.styled';
import AboutText from './AboutText';
import React from 'react';
import imgTop from '../../assets/images/about-top.jpg';
import imgBottom from '../../assets/images/about-bottom.jpg';

import SliderSimple from 'components/Slider/SliderSimple';
// import { Player } from 'video-react';

export default function AboutMeSection({ name }) {
  return (
    <>
      <StyledAboutMeSection id="about-me">
        <Container>
          <Grid>
            <StyledWrapperVideo>
              <StyledIframe
                width="324"
                height="494"
                src="https://www.youtube.com/embed/f96YvU9RT_8?si=swajn3PTSSGXdyGh"
                title="YouTube video player"
              ></StyledIframe>
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
          <SliderSimple title="Дипломи та Сертифікати" name={name} />
        </Container>
      </StyledAboutMeSection>
    </>
  );
}
