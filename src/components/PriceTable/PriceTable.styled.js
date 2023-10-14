import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-family: 'ProximaNova-600';
  font-weight: 600;

  thead {
    line-height: 1.11;
  }

  tbody {
    font-size: 16px;
    line-height: 1.5;
  }

  .first-row > td {
    padding-bottom: 26px;
  }

  .second-row > td {
    padding-bottom: 16px;
  }

  tbody > tr > :first-child {
    padding-right: 8px;
    border-right: 1px solid #f2f1f3;
  }

  td {
    /* border: 1px solid black; */
    text-align: center;
  }

  .third-cell {
    padding-left: 12px;
    padding-right: 12px;
  }

  @media screen and (min-width: 1440px) {
    .first-row > td {
      padding-bottom: ${props => props.name.education && '22px'};
    }

    .second-cell {
      padding-left: 32px;
    }

    .third-cell {
      padding-left: 86px;
      padding-right: 12px;
    }
  }
`;
