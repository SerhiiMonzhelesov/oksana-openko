import styled from 'styled-components';

export const StyledWrapperFeedback = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 80px;

  @media screen and (min-width: 768px) {
    min-height: 555px;
    margin-top: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 99px;
  }
`;

export const StyledFeedback = styled.div`
  max-width: 344px;
  min-height: 436px;

  @media screen and (min-width: 768px) {
    max-width: 354px;
  }
`;

export const StyledFeedbackHeader = styled.div`
  width: 100%;
  padding: 31px 0;
  text-align: center;
  background-color: var(--bg-primery);
`;

export const StyledFeedbackContent = styled.div`
  width: 100%;
  padding: 96px 65px;
  font-family: 'ProximaNova-500', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: var(--main-text);
  opacity: 0.9;
  background: rgba(242, 241, 243, 0.9);
  box-shadow: 0px 12px 36px 0px rgba(0, 0, 0, 0.25);
`;

export const StyledFeedbackTitle = styled.p`
  margin-bottom: 16px;
`;

export const StyledFeedbackText = styled.p`
  margin-bottom: 8px;
`;

export const StyledButtonClose = styled.button`
  display: flex;
  border: none;
  background: none;
  position: absolute;
  top: 128px;
  right: 16px;
  z-index: 2;

  @media screen and (min-width: 768px) {
    right: 32px;
  }

  @media screen and (min-width: 1440px) {
    top: 133px;
    right: 162px;
  }
`;
