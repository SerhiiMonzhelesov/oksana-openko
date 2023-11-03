import React from 'react';
import Container from 'components/Container/Container';
import {
  StyledArrowSvg,
  StyledButtonApplication,
  StyledContent,
  StyledDescription,
  StyledInner,
  StyledPositionLeft,
  StyledTitle,
  StyledWrapper,
} from './HeroSection.styled';
import svgSprite from '../../assets/images/icons.svg';

export default function HeroSection() {
  const scrollToContacts = () => {
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      const scrollTop = contactsSection.offsetTop - 80;
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="hero">
        <StyledWrapper>
          <StyledInner
            data-script="assets/js/bootstrap.min.js"
            className="lazyload"
          >
            <Container>
              <StyledContent>
                <StyledPositionLeft>
                  <StyledTitle>Оксана Опенько</StyledTitle>
                  <StyledDescription>ваш сексолог</StyledDescription>
                  <StyledArrowSvg>
                    <svg height="120" viewBox="0 0 3 32">
                      <use href={svgSprite + '#arrow-1'} />
                    </svg>
                  </StyledArrowSvg>
                </StyledPositionLeft>

                <StyledButtonApplication
                  onClick={scrollToContacts}
                  aria-label="Apply for the service"
                >
                  Залишити заявку
                </StyledButtonApplication>
              </StyledContent>
            </Container>
          </StyledInner>
        </StyledWrapper>
      </section>
    </>
  );
}
