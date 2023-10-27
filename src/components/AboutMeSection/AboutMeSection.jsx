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
import imgTopWebp from '../../assets/images/about_me_section/about-top.webp';
import imgBottomWebp from '../../assets/images/about_me_section/about-bottom.webp';

import SliderSimple from 'components/Slider/SliderSimple';
import { useMediaQuery } from 'react-responsive';

export default function AboutMeSection({ name }) {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  return (
    <>
      <StyledAboutMeSection id="about-me">
        <Container>
          <section>
            <StyledWrapperVideo>
              <video
                width={isDesktop ? '448' : '324'}
                height={isDesktop ? '905' : '494'}
                src="https://res.cloudinary.com/dlpvvcdpd/video/upload/v1698179011/about_me_wpuv57.mp4"
                controls
                poster="https://res.cloudinary.com/dlpvvcdpd/image/upload/v1698340893/about_mwazdb.jpg"
                preload="none"
              ></video>
            </StyledWrapperVideo>

            <h2>Про мене</h2>
            <StyledAboutImgList>
              <li>
                <StyledWrapperImg>
                  <picture>
                    <source srcSet={imgTopWebp} type="image/webp" />
                    <img src={imgTop} alt="Portrait of Sexologist" />
                  </picture>
                </StyledWrapperImg>
              </li>
              <li>
                <StyledWrapperImgBottom>
                  <picture>
                    <source srcSet={imgBottom} type="image/webp" />
                    <img src={imgBottomWebp} alt="Portrait of Sexologist" />
                  </picture>
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
