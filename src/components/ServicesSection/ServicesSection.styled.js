import styled from 'styled-components';

export const StyledServicesSection = styled.section`
  background: var(--bg-brown);
  padding: 113px 0 112px 0;

  h2 {
    color: var(--secondary-text);
    font-family: 'IBMPlexSans-200';
    font-size: 32px;
    font-weight: 200;
    line-height: 1.25;
    margin-bottom: 56px;
  }

  @media screen and (min-width: 768px) {
    padding: 115px 0 80px 0;

    h2 {
      font-size: 40px;
      line-height: 1;
      letter-spacing: -0.4px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 136px 0;

    h2 {
      margin-bottom: 80px;
    }
  }
`;
