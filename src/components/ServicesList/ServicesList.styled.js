import styled from 'styled-components';

export const StyledServicesList = styled.ul`
  width: 100%;
  max-width: 343px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20.5px;
    row-gap: 56px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1120px;
    column-gap: 32px;
    row-gap: 88px;
  }
`;
