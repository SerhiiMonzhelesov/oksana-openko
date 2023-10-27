import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-family: 'ProximaNova-600';
  font-weight: 600;

  thead {
    line-height: 1.11;
  }

  thead > tr > td,
  tbody > tr > td {
    padding: 0;
  }

  thead > tr > :first-child {
    border-right: ${props =>
      props.name.cards || props.name.speaker ? '1px solid #f2f1f3' : 'none'};
    width: ${props => props.name.speaker && '56px'};
  }

  tbody {
    font-size: 16px;
    line-height: 1.5;
    display: ${props => props.name.speaker && 'none'};
  }

  .first-row > td {
    padding-bottom: ${props =>
      props.name.cards ? '32px' : props.name.speaker ? '0' : '30px'};
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
    text-align: center;
  }

  .second-cell {
    display: ${props => props.name.cards && 'none'};
    height: ${props => props.name.speaker && '56px'};
    display: ${props => props.name.speaker && 'flex'};
    align-items: ${props => props.name.speaker && 'center'};
    padding-left: ${props => props.name.speaker && '32px'};
    padding-right: ${props => props.name.psychotherapy && '12px'};
  }

  .third-cell {
    display: ${props =>
      props.name.psychotherapy || props.name.speaker
        ? 'none'
        : props.name.cards
        ? 'flex'
        : 'table-cell'};
    justify-content: ${props => props.name.cards && 'center'};
    padding-left: ${props => (props.name.cards ? '53px' : '17px')}; /*17px;*/
    padding-right: ${props => (props.name.cards ? '106px' : '12px')}; /*12px;*/
  }

  @media screen and (min-width: 1440px) {
    thead > tr > :first-child {
      width: ${props => props.name.speaker && '112px'};
    }

    .second-cell {
      padding-left: 32px;
      padding-right: ${props => props.name.psychotherapy && '24px'};
    }

    .third-cell {
      padding-left: ${props => (props.name.cards ? '99px' : '91px')};
      padding-right: ${props => (props.name.cards ? '167px' : '12px')};
    }
  }
`;
