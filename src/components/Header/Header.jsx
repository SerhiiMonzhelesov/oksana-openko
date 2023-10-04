import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../Container/Container';
import logo from '../../assets/images/icons.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledInner>
          <StyledLogo smooth to="/">
            <svg style={{ width: '48px', height: '48px' }}>
              <use xlinkHref={`${logo}#logo`} />
            </svg>
            Оксана Опенько
          </StyledLogo>

          <StyledList>
            <StyledNavLink to="/#about-me" smooth>
              Про мене
            </StyledNavLink>
            <StyledNavLink smooth to={'/#services'}>
              Послуги
            </StyledNavLink>
            <StyledNavLink smooth to={'/#rules'}>
              Правила роботи
            </StyledNavLink>
            <StyledNavLink smooth to={'/#contacts'}>
              Контакти
            </StyledNavLink>
          </StyledList>
        </StyledInner>
      </Container>
    </StyledHeader>
  );
}

export const StyledHeader = styled.header`
  width: 100%;
  padding: 16px;
  background: #685c588f;
  backdrop-filter: blur(21px);
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'IBMPlexSans-300', sans-serif;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.2;
  color: var(--secondary-text);
`;

export const StyledList = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
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
    margin-top: 12px;
    background-color: var(--primery-text);
    position: absolute;
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
