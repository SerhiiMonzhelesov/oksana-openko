import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export const StyledServiceCard = styled.li`
  position: relative;
  width: 100%;
  max-width: 343px;
  height: 366px;
  p {
    position: absolute;
    bottom: 0;
    height: 80px;
    padding: 12px 24px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(123, 107, 218, 0.8);
    text-align: center;
    color: var(--secondary-text);
    font-family: 'ProximaNova-600';
    font-size: 24px;
    font-weight: 600;
    font-style: normal;
    line-height: 1;
  }
  img {
    width: 100%;
    object-fit: cover;
    /* aspect-ratio: 343 / 366;  */
  }

  @media screen and (min-width: 768px) {
    max-width: 221px;
    height: 235px;
    p {
      height: 64px;
      padding: 8px 16px;
      font-family: 'ProximaNova-500';
      font-size: 20px;
      font-weight: 500;
      line-height: 1.2;
    }
    img {
      /* aspect-ratio: 221 / 235; */
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 352px;
    height: 376px;
    p {
      height: 80px;
      padding: 12px 24px;
      font-family: 'ProximaNova-600';
      font-size: 24px;
      font-weight: 600;
      line-height: 1;
    }
    img {
      /* aspect-ratio: 352 / 376; */
    }
  }
`;

export const StyledLinkCard = styled(HashLink)`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.blur-up {
    -webkit-filter: blur(5px);
    filter: blur(5px);
    transition: filter 400ms, -webkit-filter 400ms;
  }
  &.blur-up.lazyloaded {
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0px 10px 23px 0px rgba(0, 0, 0, 0.1),
      0px 41px 41px 0px rgba(0, 0, 0, 0.09),
      0px 93px 56px 0px rgba(0, 0, 0, 0.05),
      0px 165px 66px 0px rgba(0, 0, 0, 0.01);
  }
  &:hover p,
  &:focus p {
    background: rgba(149, 137, 225, 0.8);
  }
  &:active p {
    background: rgba(91, 77, 172, 0.8);
  }
`;
