import styled from 'styled-components';

export const StyledPriceField = styled.div`
  width: 100%;
  max-width: 342px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 160px;

  h2 {
    font-family: 'ProximaNova-600';
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: var(--primery-text);
  }

  .accent-block-wrapp {
    width: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.name.satisfaction ? 'normal' : 'center')};

    color: var(--secondary-text);
    background: var(--bg-primery);
    box-shadow: 0px 4px 12px 0px rgba(115, 101, 195, 0.25);
  }

  p.first-additional-text {
    font-family: ${props =>
      props.name.satisfaction ? 'ProximaNova-600' : 'ProximaNova-700'};
    font-weight: ${props => (props.name.satisfaction ? '600' : '700')};
    font-size: ${props => (props.name.satisfaction ? '18px' : '24px')};
    margin-bottom: 16px;
    line-height: ${props => (props.name.satisfaction ? '1.11' : '1')};
  }

  p.second-additional-text {
    font-family: ${props =>
      props.name.satisfaction ? 'ProximaNova-500' : 'ProximaNova-600'};
    font-weight: ${props => (props.name.satisfaction ? '500' : '600')};
    font-size: ${props => (props.name.satisfaction ? '18px' : '24px')};
    line-height: ${props => (props.name.satisfaction ? '1.11' : '1')};
    display: flex;
    margin-bottom: ${props => props.name.education && '40px'};
  }

  svg {
    margin-left: 7px;
    margin-right: 7px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    max-width: 448px;

    .accent-block-wrapp {
      flex-direction: ${props => props.name.education && 'row'};
      flex-wrap: ${props => props.name.education && 'wrap'};
      align-items: ${props => props.name.education && 'normal'};
      padding: ${props => props.name.psychotherapy && '24px 40px'};
      padding: ${props => props.name.satisfaction && '41px 40px'};
    }

    p.first-additional-text {
      margin-right: ${props => props.name.education && '16px'};
    }
  }
`;
