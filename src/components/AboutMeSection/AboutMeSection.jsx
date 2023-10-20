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

import Slider from 'components/Slider/Slider';

// import { Player } from 'video-react';

export default function AboutMeSection({ name }) {
  return (
    <>
      <StyledAboutMeSection id="about-me">
        <Container>
          <Grid>
            <StyledWrapperVideo>
              {/* <video
                src="https://res.cloudinary.com/dfqclpulu/video/upload/v1697549116/hblydatogsa2bup0k3rl.mp4"
                width="324"
                height="494"
                controls
              ></video> */}
              {/* <Player
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              /> */}
              {/* <StyledIframe
                width="324"
                height="494"
                title="Introduction video of Sexologist Oksana Openko"
                src="https://drive.google.com/file/d/1w-uCP8AShlNYc9XtVaV-a6Xd80BMdPGE/preview"
                allow="autoplay"
              ></StyledIframe> */}

              <StyledIframe
                width="324"
                height="494"
                src="https://www.youtube.com/embed/f96YvU9RT_8?si=swajn3PTSSGXdyGh"
                title="YouTube video player"
              ></StyledIframe>
              {/* <iframe
                width="324"
                height="494"
                src="https://player.vimeo.com/video/876072611?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                title="IMG_1917"
              ></iframe> */}
              <script src="https://player.vimeo.com/api/player.js"></script>
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

          <Slider title="Дипломи та Сертифікати" name={name} />
        </Container>
      </StyledAboutMeSection>
    </>
  );
}
