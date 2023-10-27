import styled from 'styled-components';

export default function TitlePages({ titlePage, name }) {
  return <StyledTitlePages name={name}>{titlePage}</StyledTitlePages>;
}

const StyledTitlePages = styled.h1`
  font-family: 'IBMPlexSans-200';
  font-size: 32px;
  font-weight: 200;
  line-height: 1.25;
  color: var(--primery-text);
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1;
    letter-spacing: ${props =>
      props.name.education
        ? '-0.8px'
        : props.name.speaker
        ? '-1.2px'
        : '-0.4px'};
    margin-bottom: ${props => (props.name.psychotherapy ? '88px' : '72px')};
  }

  @media screen and (min-width: 1440px) {
    letter-spacing: -0.4px;
  }
`;
