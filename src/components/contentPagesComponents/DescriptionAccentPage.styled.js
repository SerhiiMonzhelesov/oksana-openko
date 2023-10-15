import styled from 'styled-components';

export const StyledDescriptionAccent = styled.p`
  font-family: 'ProximaNova-600';
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;

  margin-bottom: ${props => (props.name.consultation ? '56px' : '32px')};
  span {
    color: var(--primery-text);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: ${props => (props.name.consultation ? '48px' : '32px')};
  }
`;
