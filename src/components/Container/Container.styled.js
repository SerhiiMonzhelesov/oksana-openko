import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0px auto;
  max-width: 375px;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 160px;
  }
`;
