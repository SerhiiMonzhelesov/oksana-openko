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

export default function AboutMeSection() {
  return (
    <>
      <StyledAboutMeSection id="about-me">
        <Container>
          <StyledAboutVideoWrapper>
            <StyledVideo
              autoPlay={false}
              width="324"
              height="494"
              controls="controls"
              type="video/mp4"
            />
          </StyledAboutVideoWrapper>

          <StyledAboutTitle>Про мене</StyledAboutTitle>
          <StyledAboutImgList>
            <li>
              <StyledImgTop
                src=""
                width="142"
                height="152"
                alt="Portret of sexologist"
              />
            </li>
            <li>
              <StyledImgBottom
                src=""
                width="186"
                height="233"
                alt="Another portret of sexologist"
              />
            </li>
          </StyledAboutImgList>
          <AboutText />
        </Container>
      </StyledAboutMeSection>
    </>
  );
}
