import styled from 'styled-components';

export const StyledBreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: ${props => (props.name.consultation ? '24px' : '40px')};

  font-family: 'Manrope-400';
  font-size: 14px;
  line-height: 2.86;

  svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: 2.5;
    gap: 12px;
  }
`;
