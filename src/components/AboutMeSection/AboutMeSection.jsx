import Container from 'components/Container/Container';
import {
  StyledAboutImgList,
  StyledAboutMeSection,
  StyledAboutTitle,
  StyledAboutVideoWrapper,
  StyledImgBottom,
  StyledImgTop,
  StyledVideo,
} from './About.styled';
import AboutText from './AboutText';
import SliderDiploms from './SliderDiploms';

export default function AboutMeSection() {
  return (
    <>
      <StyledAboutMeSection id="about-me">
        <Container>
          <StyledAboutVideoWrapper>
            <StyledVideo
              width="324"
              height="494"
              controls
              autoPlay={false}
              type="video/mp4"
            ></StyledVideo>
          </StyledAboutVideoWrapper>

          <StyledAboutTitle>Про мене</StyledAboutTitle>
          <StyledAboutImgList>
            <li>
              <StyledImgTop />
            </li>
            <li>
              <div></div>
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
