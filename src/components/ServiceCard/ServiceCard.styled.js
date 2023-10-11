import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledServiceCard = styled.li`
  position: relative;
  width: 100%;
  max-width: 343px;

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
  }

  @media screen and (min-width: 768px) {
    max-width: 221px;

    p {
      height: 64px;
      padding: 8px 16px;

      font-family: 'ProximaNova-500';
      font-size: 20px;
      font-weight: 500;
      line-height: 1.2;
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 352px;

    p {
      height: 80px;
      padding: 12px 24px;

      font-family: 'ProximaNova-600';
      font-size: 24px;
      font-weight: 600;
      line-height: 1;
    }
  }
`;

export const StyledLinkCard = styled(Link)`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0px 0px 12px 2px rgb(80 61 61 / 75%);
  }

  &:hover p,
  &:focus p {
    background: rgba(149, 137, 225, 0.8);
  }

  &:active p {
    background: rgba(91, 77, 172, 0.8);
  }
`;
