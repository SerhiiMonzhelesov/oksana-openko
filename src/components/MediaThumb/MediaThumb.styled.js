import styled from 'styled-components';

export const StyledMediaThumb = styled.div`
  width: 100%;
  max-width: 343px;
  margin-bottom: ${props =>
    props.$name.education ? '55px' : props.$name.speaker ? '54px' : '56px'};

  img {
    width: 100%;
    max-width: 343px;
  }

  @media screen and (min-width: 768px) {
    max-width: 342px;
    margin-bottom: 0;
    margin-bottom: ${props =>
      props.$name.psychotherapy
        ? '74px'
        : props.$name.cards
        ? '96px'
        : props.$name.speaker
        ? '64px'
        : props.$name.satisfaction
        ? '68px'
        : '24px'};

    img {
      max-width: 342px;
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 448px;
    margin-bottom: ${props =>
      props.$name.consultation
        ? '54px'
        : props.$name.education
        ? '77px'
        : props.$name.speaker
        ? '48px'
        : props.$name.satisfaction
        ? '99px'
        : '24px'};

    img {
      max-width: 448px;
    }
  }
`;