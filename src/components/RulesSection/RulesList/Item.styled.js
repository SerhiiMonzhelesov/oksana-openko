import { styled } from 'styled-components';

export const StyledRulesItem = styled.li`
  display: grid;
  grid-template-columns: 24px auto;
  align-items: center;
  gap: 12px;
  svg {
    width: 24px;
    height: 24px;
    color: var(--primery-text);
  }
`;
