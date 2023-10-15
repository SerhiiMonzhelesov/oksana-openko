import React, { useEffect, useState } from 'react';
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
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const scrollToBlock = queryParams.get('scroll');
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    console.log(document.querySelector('header').offsetHeight);
    if (scrollToBlock) {
      const scrollId = document.querySelector(`#${scrollToBlock}`);

      if (scrollId) {
        const scrollTop = scrollId.offsetTop - 80;
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
      }
      if (window.innerWidth <= 1439) {
        closeMenu();
      }
    }
  }, [scrollToBlock]);

  const handleScrollToElement = event => {
    event.preventDefault();
    const targetScroll = event.target.dataset.scroll;

    if (isHomePage) {
      const scrollId = document.querySelector(`#${targetScroll}`);

      if (scrollId) {
        const scrollTop = scrollId.offsetTop;
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        if (window.innerWidth <= 1439) {
          closeMenu();
        }
      }
    } else {
      navigate(`/?scroll=${targetScroll}`);
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
