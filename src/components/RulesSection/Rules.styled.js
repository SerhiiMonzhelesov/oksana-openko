import { styled } from 'styled-components';

export const StyledRulesSection = styled.section`
  padding-top: 112px;
  padding-bottom: 112px;
  background-color: var(--bg-main);
  @media screen and (min-width: 768px) {
    padding-bottom: 80px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 136px;
    padding-bottom: 136px;
  }
`;
export const StyledRulesTitle = styled.h2`
  margin-bottom: 56px;
  font-family: 'IBMPlexSans-200';
  font-weight: 200;
  font-size: 32px;
  line-height: 1.25;
  color: var(--primery-text);
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

//List
export const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-bottom: 56px;
  @media screen and (min-width: 768px) {
    margin-bottom: 72px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 32px;
    margin-bottom: 96px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 544px;
  }
`;

//List reject

export const StyledRulesSubtitle = styled.h3`
  margin-bottom: 24px;
  font-family: 'ProximaNova-300';
  font-weight: 300;
  font-size: 20px;
  line-height: 1.2;
  color: var(--primery-text);
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const StyledRulesList = styled.ul`
  display: grid;
  grid-gap: 16px;
`;
