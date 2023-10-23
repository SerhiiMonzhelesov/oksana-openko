import styled from 'styled-components';

export const StyledListField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 124px;

  p.title-list {
    display: ${props => (props.name.psychotherapy ? 'none' : 'block')};
    color: ${props =>
      props.name.education ? 'inherit' : 'var(--primery-text)'};
    font-family: ${props =>
      props.name.satisfaction ? 'ProximaNova-500' : 'ProximaNova-600'};
    font-weight: ${props => (props.name.satisfaction ? '500' : '600')};
    font-size: ${props => (props.name.satisfaction ? '20px' : '18px')};
    margin-bottom: ${props => (props.name.satisfaction ? '24px' : '16px')};
    line-height: ${props => (props.name.satisfaction ? '1.2' : '1.33')};
    letter-spacing: ${props =>
      props.name.satisfaction ? '-0.2px' : '-0.18px'};
  }

  .accent-text {
    color: var(--primery-text);
  }
  .accent-phrase {
    font-family: 'ProximaNova-700';
    font-weight: 700;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  div.icon-wrapper {
    width: 6px;
    height: 6px;
    display: flex;
    align-items: center;
  }

  svg.icon-marker {
    width: 6px;
    height: 6px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: ${props => (props.name.education ? '88px' : '0')};

    ul {
      max-width: ${props =>
        props.name.education
          ? '632px'
          : props.name.consultation
          ? '343px'
          : '342px'};
    }
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;

    ul {
      max-width: ${props =>
        props.name.education
          ? '553px'
          : props.name.consultation
          ? '480px'
          : '544px'};
    }
  }
`;
