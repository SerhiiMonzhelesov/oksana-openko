import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  background-color: #887b79;
`;
export const StyledFooterWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  grid-gap: 32px;
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    align-content: center;
    align-items: center;
    justify-items: center;
    grid-gap: 77px;
  }
  @media screen and (min-width: 1280px) {
    grid-gap: 100px;
  }
`;
export const StyledFooterTitle = styled(Link)`
  font-family: 'IBMPlexSans-300', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.2;
  color: var(--secondary-text);
  text-align: center;
`;
export const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
export const StyledText = styled.p`
  font-family: 'ProximaNova-400';
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  color: var(--secondary-text);
`;
export const StyledWrapperSoc = styled.ul`
  display: flex;
  gap: 32px;
`;

//SVG

export const StyledIconLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  &:hover,
  &:focus {
    background-color: #9589e1;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const StyledIcon = styled.svg`
  width: 28px;
  height: 28px;
  color: var(--secondary-text);
`;
