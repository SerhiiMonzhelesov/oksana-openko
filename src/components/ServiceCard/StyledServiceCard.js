import styled from 'styled-components';

export const StyledServiceCard = styled.li`
  position: relative;
  width: 100%;
  max-width: 352px;
  background-color: grey;

  p {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 80px;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    background: rgba(123, 107, 218, 0.8);

    color: var(--secondary-text);
    text-align: center;
    font-family: 'ProximaNova-600';
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 1;
  }

  img {
    width: 100%;
  }
`;
