import styled from 'styled-components';
import heroBgMobile from '../../assets/images/hero-bg/hero-bg-mobile.png';
import heroBgTablet from '../../assets/images/hero-bg/hero-bg-tablet.png';
import heroBgDesktop from '../../assets/images/hero-bg/hero-bg-desktop.png';

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInner = styled.div`
  width: 375px;
  min-height: 667px;
  margin: 0 auto;
  background-image: url(${heroBgMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    width: 768px;
    min-height: 1024px;
    background-image: url(${heroBgTablet});
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    background-image: url(${heroBgDesktop});
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 347px;

  @media screen and (min-width: 768px) {
    margin-top: 272px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 312px;
  }
`;

export const StyledPositionLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 8px;
  font-family: 'IBMPlexSans-500', sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  color: var(--secondary-text);

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 64px;
    line-height: 80px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 72px;
  }
`;

export const StyledDescription = styled.p`
  margin-bottom: 128px;
  font-family: 'IBMPlexSans-500', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.64px;
  color: var(--secondary-text);

  @media screen and (min-width: 768px) {
    margin-bottom: 76px;
    font-size: 48px;
    line-height: 56px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 60px;
    font-size: 56px;
  }
`;

export const StyledArrowSvg = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 76px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 60px;
  }
`;

export const StyledButtonApplication = styled.button`
  padding: 16px 0;
  font-family: 'ProximaNova-600', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.48px;
  color: var(--secondary-text);
  background-color: var(--bg-primery);
  border: none;
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #9589e1;
  }

  &:active {
    background-color: #5b4dac;
  }

  @media screen and (min-width: 768px) {
    max-width: 352px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
