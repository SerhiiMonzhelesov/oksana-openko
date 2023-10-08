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
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScrollToElement = event => {
    event.preventDefault();

    console.log(event.target.dataset.scroll);

    const scrollId = document.querySelector('#' + event.target.dataset.scroll);
    const scrollTop = scrollId.offsetTop;
    window.scrollTo({ top: scrollTop, behavior: 'smooth' });

    if (window.innerWidth <= 1439) {
      closeMenu();
    }
  };

  const isHomePage = location.pathname === '/';

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
            {isHomePage ? (
              // Используем handleScrollToElement для скролла на главной странице
              <>
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
                <StyledNavLink
                  data-scroll="rules"
                  onClick={handleScrollToElement}
                >
                  Правила роботи
                </StyledNavLink>
                <StyledNavLink
                  data-scroll="contacts"
                  onClick={handleScrollToElement}
                >
                  Контакти
                </StyledNavLink>
              </>
            ) : (
              // Используем Link для перенаправления на главную страницу на других страницах
              <>
                <StyledNavLink to="/#about-me">Про мене</StyledNavLink>
                <StyledNavLink to="/#services">Послуги</StyledNavLink>
                <StyledNavLink to="/#rules"> Правила роботи</StyledNavLink>
                <StyledNavLink to="/#contacts">Контакти</StyledNavLink>
              </>
            )}
          </StyledNavList>

          <StyledMobileMenu open={isOpen}>
            <StyledButtonClose onClick={toggleMenu}>
              <svg width="40" height="40" viewBox="0 0 40 40">
                <use href={SvgSprite + '#btn-close'} />
              </svg>
            </StyledButtonClose>

            <StyledMobileMenuHeader>
              <StyledMobileLogo to="/">
                <svg style={{ width: '48px', height: '48px' }}>
                  <use xlinkHref={`${logo}#logo`} />
                </svg>
                Оксана Опенько
              </StyledMobileLogo>
            </StyledMobileMenuHeader>

            <StyledMobileNavList>
              {isHomePage ? (
                // Используем handleScrollToElement для скролла на главной странице
                <>
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
                </>
              ) : (
                <>
                  <StyledMobileNavLink to="/#about-me">
                    Про мене
                  </StyledMobileNavLink>
                  <StyledMobileNavLink to="/#services">
                    Послуги
                  </StyledMobileNavLink>
                  <StyledMobileNavLink to="/#rules">
                    Правила роботи
                  </StyledMobileNavLink>
                  <StyledMobileNavLink to="/#contacts">
                    Контакти
                  </StyledMobileNavLink>
                </>
              )}
            </StyledMobileNavList>
          </StyledMobileMenu>
        </StyledInner>
      </Container>
    </StyledHeader>
  );
}
