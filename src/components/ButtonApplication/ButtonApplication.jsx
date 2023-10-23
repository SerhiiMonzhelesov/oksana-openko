import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export default function ButtonApplication() {
  const scrollWithOffset = el => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -79;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'auto' });
  };

  return (
    <StyledButtonApplication
      to="/#contacts"
      scroll={el => scrollWithOffset(el)}
      aria-label="Apply for the service"
    >
      Залишити заявку
    </StyledButtonApplication>
  );
}

const StyledButtonApplication = styled(HashLink)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: var(--bg-primery);
  box-shadow: 0px 6px 20px 0px rgba(89, 78, 155, 0.25);

  font-family: 'ProximaNova-600';
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.48px;
  color: var(--secondary-text);

  &:hover,
  &:focus {
    background: #9589e1;
  }

  &:active {
    background: #5b4dac;
  }
`;
