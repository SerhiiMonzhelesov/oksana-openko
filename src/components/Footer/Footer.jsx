import React from 'react';
import sprite from '../../assets/images/icons.svg';
import { Link } from 'react-router-dom';
import {
  StyledContactWrapper,
  StyledText,
  StyledFooterTitle,
  StyledWrapperSoc,
  StyledFooterWrapper,
  StyledIcon,
} from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledFooterTitle to="/">Оксана Опенько</StyledFooterTitle>
      <StyledContactWrapper>
        <StyledText>+38 096 492 34 11</StyledText>
        <StyledText>Консультації проводяться в м. Київ / м. Бровари</StyledText>
      </StyledContactWrapper>

      <StyledWrapperSoc>
        <li>
          <Link to="https://instagram.com/oksana_openko_?igshid=MzRlODBiNWFlZA==">
            <StyledIcon
              viewBox="0 0 32 32"
              style={{
                width: '24px',
                height: '24px',
              }}
            >
              <use href={sprite + '#instagram'}></use>
            </StyledIcon>
          </Link>
        </li>
        <li>
          <Link to="https://t.me/oksana_openko_sexolog">
            <StyledIcon viewBox="0 0 32 32">
              <use href={sprite + '#telegram'}></use>
            </StyledIcon>
          </Link>
        </li>
        <li>
          <Link to="https://www.facebook.com/profile.php?id=100075513560952 ">
            <StyledIcon viewBox="0 0 32 32">
              <use href={sprite + '#facebook'}></use>
            </StyledIcon>
          </Link>
        </li>
      </StyledWrapperSoc>
    </StyledFooterWrapper>
  );
};

export default Footer;
