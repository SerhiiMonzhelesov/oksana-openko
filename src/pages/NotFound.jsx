import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const NotFound = () => {
  return (
    <StyledThumb>
      <h2>404</h2>
      <h3>Something's wrong here.</h3>
      <p>
        This is a 404 error, which means you've clicked on a bad link or entered
        an invalid URL.
      </p>
      <p>Maybe what you are looking for can be found at</p>
      <StyledLink to="/">Home</StyledLink>
    </StyledThumb>
  );
};

export const StyledLink = styled(Link)`
  padding: 5px;
  font-size: 24px;
  color: var(--secondary-text);
  text-decoration: underline;
  cursor: pointer;

  transition: all 300ms ease-in-out;
  &:hover {
    color: var(--primery-text);
  }
`;
export const StyledThumb = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  background: linear-gradient(
    220deg,
    rgba(109, 84, 235, 0.6) 3.47%,
    rgba(123, 107, 218, 0.8) 90.06%
  );
  p {
    font-size: 18px;
    color: var(--secondary-text);
    text-align: center;
  }
  h3 {
    color: var(--secondary-text);
  }
  h2 {
    font-size: 100px;
    color: var(--secondary-text);
  }
`;

export default NotFound;
