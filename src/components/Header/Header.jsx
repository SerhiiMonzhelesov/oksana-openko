import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../Container/Container';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledInner>
          <StyledLogo smooth to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: '48px', height: '48px' }}
            />
            Оксана Опенько
          </StyledLogo>
          <StyledNav>
            <NavLink to="/#about-me" smooth>
              Про мене
            </NavLink>
            <NavLink smooth to={'/#services'}>
              Послуги
            </NavLink>
            <NavLink smooth to={'/#rules'}>
              Правила роботи
            </NavLink>
            <NavLink smooth to={'/#contacts'}>
              Контакти
            </NavLink>
          </StyledNav>
        </StyledInner>
      </Container>
    </StyledHeader>
  );
}

export const StyledHeader = styled.header`
  width: 100%;
  padding: 16px;
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
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;
