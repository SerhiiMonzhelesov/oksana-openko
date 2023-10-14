import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-family: 'ProximaNova-600';
  font-weight: 600;

  thead {
    line-height: 1.11;
  }

  thead > tr > :first-child {
    border-right: ${props => (props.name.cards ? '1px solid #f2f1f3' : 'none')};
  }

  tbody {
    font-size: 16px;
    line-height: 1.5;
  }

  .first-row > td {
    padding-bottom: ${props => (props.name.cards ? '29px' : '26px')};
  }

  .second-row > td {
    display: ${props => props.name.cards && 'none'};
    padding-bottom: 16px;
  }

  tbody > tr > :first-child {
    width: ${props =>
      (props.name.psychotherapy ? '70px' : props.name.cards) ? '56px' : 'auto'};
    padding-right: 8px;
    border-right: 1px solid #f2f1f3;
  }

  td {
    /* border: 1px solid black; */
    text-align: center;
  }

  .second-cell {
    display: ${props => props.name.cards && 'none'};
  }

  .third-cell {
    display: ${props => props.name.psychotherapy && 'none'};
    padding-left: 12px;
    padding-right: ${props => (props.name.cards ? '58px' : '12px')};
  }

  @media screen and (min-width: 1440px) {
    .first-row > td {
      padding-bottom: ${props => props.name.education && '22px'};
    }

    .second-cell {
      padding-left: 32px;
    }

    .third-cell {
      padding-left: ${props => (props.name.cards ? '0px' : '86px')};
      padding-right: ${props => (props.name.cards ? '58px' : '12px')};
    }
  }
`;
