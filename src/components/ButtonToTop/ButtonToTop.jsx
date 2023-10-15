import styled from 'styled-components';
import SpriteSvg from '../../assets/images/icons.svg';

export default function ButtonToTop() {
  const scrollToTop = () => {
    const heroSection = document.getElementById('hero');
    const scrollTop = heroSection.offsetTop - 80;
    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
  };

  return (
    <StyledButtonToTop onClick={scrollToTop}>
      <svg width="28" height="29" viewBox="0 0 28 29">
        <use href={SpriteSvg + '#arrow-up'} />
      </svg>
    </StyledButtonToTop>
  );
}

export const StyledButtonToTop = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 48px;
  height: 48px;
  border: none;
  background-color: var(--bg-primery);
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  right: 17px;
  bottom: 325px;
  z-index: 1000;

  &:hover,
  &:focus {
    background-color: #9589e1;
  }

  @media screen and (min-width: 768px) {
    right: 32px;
    bottom: 380px;
  }

  @media screen and (min-width: 1440px) {
    right: 160px;
    bottom: 256px;
  }
`;
