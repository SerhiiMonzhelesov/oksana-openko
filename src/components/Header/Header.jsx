import React, { useState } from 'react';
import Container from '../Container/Container';
import logo from '../../assets/images/icons.svg';
import {
  StyledBurger,
  StyledButtonClose,
  StyledHeader,
  StyledInner,
  StyledLogo,
  StyledMobileLogo,
  StyledMobileMenu,
  StyledMobileMenuHeader,
  StyledMobileNavLink,
  StyledMobileNavList,
  StyledNavLink,
  StyledNavList,
  StyledWrapperBurgerLogo,
} from './Header.styled';
import SvgSprite from '../../assets/images/icons.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    console.log('message');
  };

  const handleScrollToElement = event => {
    event.preventDefault();

    const scrollId = document.querySelector('#' + event.target.dataset.scroll);
    const scrollTop = scrollId.offsetTop;
    window.scrollTo({ top: scrollTop, behavior: 'smooth' });

    if (window.innerWidth <= 1439) {
      closeMenu();
    }
  };

  return (
    <StyledHeader>
      <Container>
        <StyledInner>
          <StyledWrapperBurgerLogo>
            <StyledBurger onClick={toggleMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href={SvgSprite + '#burger'} />
              </svg>
            </StyledBurger>
            <StyledLogo to="/">
              <svg style={{ width: '48px', height: '48px' }}>
                <use xlinkHref={`${logo}#logo`} />
              </svg>
              Оксана Опенько
            </StyledLogo>
          </StyledWrapperBurgerLogo>

          <StyledNavList>
            <StyledNavLink
              data-scroll="about-me"
              onClick={handleScrollToElement}
            >
              Про мене
            </StyledNavLink>
            <StyledNavLink
              data-scroll="services"
              onClick={handleScrollToElement}
            >
              Послуги
            </StyledNavLink>
            <StyledNavLink data-scroll="rules" onClick={handleScrollToElement}>
              Правила роботи
            </StyledNavLink>
            <StyledNavLink
              data-scroll="contacts"
              onClick={handleScrollToElement}
            >
              Контакти
            </StyledNavLink>
          </StyledNavList>

          <StyledMobileMenu isOpen={isOpen}>
            <StyledButtonClose onClick={toggleMenu}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <use href={SvgSprite + '#btn-close'} />
              </svg>
            </StyledButtonClose>

            <StyledMobileMenuHeader>
              <StyledMobileLogo smooth to="/">
                <svg style={{ width: '48px', height: '48px' }}>
                  <use xlinkHref={`${logo}#logo`} />
                </svg>
                Оксана Опенько
              </StyledMobileLogo>
            </StyledMobileMenuHeader>

            <StyledMobileNavList>
              <StyledMobileNavLink
                data-scroll="about-me"
                onClick={handleScrollToElement}
              >
                Про мене
              </StyledMobileNavLink>
              <StyledMobileNavLink
                data-scroll="services"
                onClick={handleScrollToElement}
              >
                Послуги
              </StyledMobileNavLink>
              <StyledMobileNavLink
                data-scroll="rules"
                onClick={handleScrollToElement}
              >
                Правила роботи
              </StyledMobileNavLink>
              <StyledMobileNavLink
                data-scroll="contacts"
                onClick={handleScrollToElement}
              >
                Контакти
              </StyledMobileNavLink>
            </StyledMobileNavList>
          </StyledMobileMenu>
        </StyledInner>
      </Container>
    </StyledHeader>
  );
}
