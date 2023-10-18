import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  background-color: #887b79;
`;
export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding-top: 24px;
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 77px;
  }
  @media screen and (min-width: 1440px) {
    gap: 100px;
  }
`;
export const StyledFooterTitle = styled.h2`
  font-family: 'IBMPlexSans-300', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.2;
  color: var(--secondary-text);
  text-align: center;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledText = styled.p`
  font-family: 'ProximaNova-400';
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  color: var(--secondary-text);
`;

export const StyledPhoneLink = styled(Link)`
  margin-bottom: 32px;
  font-family: 'ProximaNova-400';
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  color: var(--secondary-text);

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 8px;
  }
`;
export const StyledTextBr = styled.br`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const StyledWrapperSoc = styled.ul`
  display: flex;
  gap: 32px;
  @media screen and (min-width: 1440px) {
    gap: 59px;
  }
`;

//SVG

export const StyledIconLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #9589e1;
    border-radius: 4px;
  }
`;

export const StyledIcon = styled.svg`
  width: 28px;
  height: 28px;
  color: var(--secondary-text);
`;
