import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SpriteSvg from '../../assets/images/icons.svg';

export default function ButtonToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
      setHeroHeight(heroSection.offsetHeight);
    }

    const handleScroll = () => {
      if (window.scrollY >= heroHeight - 80) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heroHeight]);

  return (
    <StyledButtonToTop
      onClick={scrollToTop}
      style={{ display: isButtonVisible ? 'flex' : 'none' }}
      aria-label="Scroll to top of page"
    >
      <svg width="28" height="29" viewBox="0 0 28 29">
        <use href={SpriteSvg + '#arrow-up'} />
      </svg>
    </StyledButtonToTop>
  );
}

export const StyledButtonToTop = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 48px;
  height: 48px;
  border: none;
  background-color: var(--bg-primery);
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  right: 16px;
  bottom: 36px;
  z-index: 1000;

  &:hover,
  &:focus {
    background-color: #9589e1;
  }

  @media screen and (min-width: 768px) {
    right: 32px;
    bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    right: 160px;
    bottom: 160px;
  }
`;
