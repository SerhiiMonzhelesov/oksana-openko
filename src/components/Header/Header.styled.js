import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 16px 0 16px 0;
  background: #685c588f;
  backdrop-filter: blur(21px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  @media screen and (min-width: 768px) {
    padding: 16px 0 16px 0;
  }
`;

export const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: -4px;
  font-family: 'IBMPlexSans-300', sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.2;
  color: var(--secondary-text);
`;

export const StyledNavList = styled.nav`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: 'ProximaNova-500', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: var(--secondary-text);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:after {
    display: none;
    content: '';
    width: 100%;
    height: 2px;
    background-color: var(--primery-text);
    position: absolute;
    top: 31px;
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
    &.active {
      &:after {
        display: block;
      }
    }
  }
`;

// Mobile menu
export const StyledWrapperBurgerLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const StyledBurger = styled.button`
  display: flex;
  border: none;
  background: none;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const StyledMobileMenu = styled.div`
  display: flex;
  justify-content: center;
  width: 335px;
  height: 100vh;
  padding-top: 144px;
  background-color: var(--bg-brown);
  position: absolute;
  top: 0;
  left: -103%;
  z-index: 10;
  transition: left 0.3s ease-in-out;

  ${({ open }) =>
    open &&
    css`
      left: 0;
    `}

  @media screen and (max-width: 375px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 391px;
    padding-top: 0;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const StyledMobileMenuHeader = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 144px;
    padding: 16px 32px;
    background: var(
      --Header-bg,
      linear-gradient(
        0deg,
        rgba(104, 92, 88, 0.56) 0%,
        rgba(104, 92, 88, 0.56) 100%
      ),
      radial-gradient(
        231% 135.8% at 0.9% 2.98%,
        rgba(165, 178, 222, 0.4) 0%,
        rgba(255, 255, 255, 0) 100%
      )
    );
    backdrop-filter: blur(21px);
  }
`;

export const StyledMobileLogo = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: -4px;
    margin-left: 56px;
    font-family: 'IBMPlexSans-300', sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    color: var(--secondary-text);
  }
`;

export const StyledButtonClose = styled.button`
  display: flex;
  border: none;
  background: none;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0px;
  right: -40px;
  z-index: 1000;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    top: 20px;
    right: 0;
    left: 29px;
    z-index: 1000;
  }
`;

export const StyledMobileNavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledMobileNavLink = styled(Link)`
  font-family: 'ProximaNova-500', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: var(--secondary-text);
`;
