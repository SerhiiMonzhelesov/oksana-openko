import styled from 'styled-components';

export default function FeedbackWrapperContent({ children, name }) {
  return (
    <StyledFeedbackhWrapperContent name={name}>
      {children}
    </StyledFeedbackhWrapperContent>
  );
}

const StyledFeedbackhWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${props => (props.name.home ? '0' : '124px')};

  @media screen and (min-width: 768px) {
    margin-bottom: ${props => (props.name.home ? '0' : '152px')};
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: ${props => props.name.cards && '116px'};
  }
`;
