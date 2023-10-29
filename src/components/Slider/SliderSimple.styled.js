import styled from 'styled-components';

export const StyledSliderAboutSubtitle = styled.h3`
  margin-bottom: 24px;
  font-family: 'ProximaNova-600';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  color: var(--main-text);
`;

export const StyledWrapperGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  max-width: ${props => (props.name.home ? '343px' : '316px')};

  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    gap: ${props => (props.name.home ? '16px' : '24px')};
    overflow: hidden;
    padding-bottom: 24px;
  }

  .wrapper-bullets-nav {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  span {
    width: 12px;
    height: 12px;
    border-radius: 8px;
    border: 1px solid var(--bg-brown);
    cursor: pointer;
  }

  .active {
    background: var(--bg-primery);
  }

  a {
    padding: ${props => (props.name.home ? '0' : '16px 12px')};
    border: ${props =>
      props.name.home ? 'none' : '1px solid var(--bg-primery)'};
  }

  .blur-up {
    -webkit-filter: blur(5px);
    filter: blur(5px);
    transition: filter 400ms, -webkit-filter 400ms;
  }

  .blur-up.lazyloaded {
    -webkit-filter: blur(0);
    filter: blur(0);
  }

  @media screen and (min-width: 768px) {
    align-self: center;
    max-width: ${props => (props.name.home ? '704px' : '656px')};
  }

  @media screen and (min-width: 1440px) {
    max-width: ${props => props.name.home && '1120px'};

    .gallery {
      gap: 24px;
    }
  }
`;
