import Container from 'components/Container/Container';
import {
  StyledAboutImgList,
  StyledAboutMeSection,
  StyledWrapperImg,
  StyledWrapperImgBottom,
  StyledWrapperVideo,
} from './About.styled';
import AboutText from './AboutText';
import React from 'react';
import imgTop from '../../assets/images/about_me_section/about-top.jpg';
import imgBottom from '../../assets/images/about_me_section/about-bottom.jpeg';

import SliderSimple from 'components/Slider/SliderSimple';
import { useMediaQuery } from 'react-responsive';
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

export default function AboutMeSection({ name }) {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <>
      <StyledAboutMeSection id="about-me">
        <Container>
          <section>
            <StyledWrapperVideo>
              <Player
                width={isDesktop ? '448' : '324'}
                height={isDesktop ? '905' : '494'}
                src="https://res.cloudinary.com/dlpvvcdpd/video/upload/v1698179011/about_me_wpuv57.mp4"
              >
                <ControlBar>
                  <ReplayControl seconds={10} order={1.1} />
                  <ForwardControl seconds={30} order={1.2} />
                  <CurrentTimeDisplay order={4.1} />
                  <TimeDivider order={4.2} />
                  <PlaybackRateMenuButton
                    rates={[5, 2, 1, 0.5, 0.1]}
                    order={7.1}
                  />
                  <VolumeMenuButton disabled />
                  <PlayToggle />
                </ControlBar>
              </Player>
            </StyledWrapperVideo>

            <h2>Про мене</h2>
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
          </section>
          <SliderSimple title="Дипломи та Сертифікати" name={name} />
        </Container>
      </StyledAboutMeSection>
    </>
  );
}
