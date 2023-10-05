import Container from 'components/Container/Container';
import styled from 'styled-components';
import heroBg from '../../../src/assets/images/hero-bg.png';

export default function HeroSection() {
  return (
    <>
      <section>
        <StyledWrapper>
          <StyledInner>
            <Container>
              <StyledContent>
                <h1>Оксана Опенько</h1>
                <p>ваш сексолог</p>
              </StyledContent>
            </Container>
          </StyledInner>
        </StyledWrapper>
      </section>
    </>
  );
}

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInner = styled.div`
  display: flex;
  justify-content: center;
  width: 1440px;
  height: 1024px;
  object-fit: cover;
  background-image: url(${heroBg});
  background-position: center;

  @media screen and (min-width: 768px) {
  }
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 312px;
  margin-left: 10px;
`;

export const StyledImage = styled.img`
  display: block;
  max-width: 100%;

  height: auto;
  object-fit: cover;
`;
