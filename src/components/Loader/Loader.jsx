import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = ({ section }) => {
  return (
    <StyledLoaderWrapper section={section}>
      <RotatingLines
        strokeColor="#7B6BDA"
        strokeWidth="3"
        animationDuration="1"
        width="68"
        visible={true}
      />
    </StyledLoaderWrapper>
  );
};

const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.section === 'request' ? '90px' : '100vh')};
`;

export default Loader;
