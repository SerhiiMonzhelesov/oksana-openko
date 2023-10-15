import styled from 'styled-components';

export const StyledRigthWrapperContent = styled.div`
  margin-bottom: ${props =>
    props.name.psychotherapy
      ? '152px'
      : props.name.education
      ? '80px'
      : props.name.cards || props.name.speaker
      ? '88px'
      : '0'};

  @media screen and (min-width: 1440px) {
    margin-bottom: ${props =>
      props.name.psychotherapy || props.name.speaker ? '152px' : '136px'};
  }
`;
