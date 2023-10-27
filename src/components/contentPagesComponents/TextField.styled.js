import styled from 'styled-components';

export const StyledTextField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${props =>
    props.name.cards || props.name.satisfaction
      ? '24px'
      : props.name.speaker
      ? '16px'
      : '0'};
  margin-bottom: ${props =>
    props.name.psychotherapy || props.name.satisfaction
      ? '48px'
      : props.name.education
      ? '52px'
      : '124px'};

  .second-text {
    display: ${props =>
      props.name.psychotherapy || props.name.education ? 'none' : 'block'};
    color: ${props => props.name.satisfaction && 'var(--primery-text)'};
    font-family: ${props => props.name.satisfaction && 'ProximaNova-500'};
    font-weight: ${props => props.name.satisfaction && '500'};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: ${props => (props.name.cards || props.name.speaker) && '0'};
    gap: ${props => props.name.cards && '33px'};
  }

  @media screen and (min-width: 1440px) {
    gap: ${props =>
      props.name.speaker
        ? '32px'
        : props.name.cards
        ? '24px'
        : props.name.satisfaction
        ? '40px'
        : '0'};

    margin-bottom: ${props =>
      props.name.education
        ? '55px'
        : props.name.satisfaction
        ? '40px'
        : props.name.cards || props.name.speaker
        ? '0'
        : props.name.psychotherapy
        ? '48px'
        : '0'};

    .first-text {
      max-width: ${props => props.name.satisfaction && '544px'};
    }

    .second-text {
      max-width: ${props => props.name.satisfaction && '547px'};
    }
  }
`;
