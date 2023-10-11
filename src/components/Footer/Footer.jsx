import React from 'react';
import sprite from '../../assets/images/icons.svg';
import {
  StyledContactWrapper,
  StyledText,
  StyledFooterTitle,
  StyledWrapperSoc,
  StyledFooterWrapper,
  StyledIcon,
  StyledIconLink,
  StyledTextBr,
  StyledPhoneLink,
} from './Footer.styled';

const Footer = ({ handleScrollToTop }) => {
  return (
    <StyledFooterWrapper>
      <StyledFooterTitle to="/" onClick={handleScrollToTop}>
        Оксана Опенько
      </StyledFooterTitle>
      <StyledContactWrapper>

        <StyledPhoneLink to="tel:+380976172636">
          +38 097 617 26 36

        </StyledPhoneLink>
        <StyledText>
          Консультації проводяться в <StyledTextBr /> м. Київ / м. Бровари
        </StyledText>
        <StyledText></StyledText>
      </StyledContactWrapper>

      <StyledWrapperSoc>
        <li>
          <StyledIconLink
            to="https://instagram.com/oksana_openko_?igshid=MzRlODBiNWFlZA=="
            style={{
              width: '24px',
              height: '24px',
            }}
          >
            <StyledIcon
              viewBox="0 0 32 32"
              style={{
                width: '24px',
                height: '24px',
              }}
            >
              <use href={sprite + '#instagram'}></use>
            </StyledIcon>
          </StyledIconLink>
        </li>
        <li>
          <StyledIconLink to="https://t.me/oksana_openko_sexolog">
            <StyledIcon viewBox="0 0 32 32">
              <use href={sprite + '#telegram'}></use>
            </StyledIcon>
          </StyledIconLink>
        </li>
        <li>
          <StyledIconLink to="https://www.facebook.com/profile.php?id=100075513560952 ">
            <StyledIcon viewBox="0 0 32 32">
              <use href={sprite + '#facebook'}></use>
            </StyledIcon>
          </StyledIconLink>
        </li>
      </StyledWrapperSoc>
    </StyledFooterWrapper>
  );
};

export default Footer;
