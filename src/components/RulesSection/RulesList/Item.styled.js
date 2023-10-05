import { styled } from 'styled-components';

export const StyledRulesText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  color: #575150;
`;

export const StyledRulesItem = styled.li`
  display: grid;
  grid-template-columns: 24px auto; /* 24px для першої колонки, auto для другої */
  align-items: center;
  gap: 12px;
`;
export const StyledIcon = styled.svg`
  width: 24px;
  height: 24px;
  color: var(--primery-text);
`;
