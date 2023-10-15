import styled from 'styled-components';

export const StyledMainWrapperContent = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: ${props => (props.name.consultation ? '144px' : '128px')};
  padding-bottom: 96px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 80px;
    padding-bottom: 152px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: ${props => (props.name.speaker ? '152px' : '154px')};
  }
`;
