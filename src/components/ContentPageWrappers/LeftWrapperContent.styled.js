import styled from 'styled-components';

export const StyledLeftWrapperContent = styled.div`
  padding-top: ${props =>
    props.name.consultation
      ? '32px'
      : props.name.satisfaction
      ? '41px'
      : '48px'};
  width: 100%;
  max-width: 343px;
  margin-right: auto;
  margin-bottom: ${props =>
    props.name.consultation || props.name.satisfaction ? '88px' : '0'};

  @media screen and (min-width: 768px) {
    max-width: ${props =>
      props.name.cards ? '341px' : props.name.speaker ? '342px' : '343px'};
  }

  @media screen and (min-width: 1440px) {
    padding-top: 48px;
    max-width: ${props =>
      props.name.consultation
        ? '480px'
        : props.name.psychotherapy
        ? '540px'
        : props.name.education
        ? '553px'
        : props.name.cards || props.name.speaker
        ? '448px'
        : '593px'};
    margin-bottom: ${props => (props.name.education ? '137px' : '0')};
    margin-right: ${props =>
      props.name.consultation
        ? '192px'
        : props.name.education
        ? '119px'
        : props.name.cards || props.name.speaker
        ? '224px'
        : props.name.satisfaction
        ? '79px'
        : 'auto'};
  }
`;
