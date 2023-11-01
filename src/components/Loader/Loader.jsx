import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledLoaderWrapper>
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

export default Loader;

export const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
