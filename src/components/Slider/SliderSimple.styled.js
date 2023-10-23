import styled from 'styled-components';

export const StyledWrapperGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  max-width: ${props => (props.name.home ? '343px' : '311px')};

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

  button {
    width: 12px;
    height: 12px;
    border-radius: 8px;
    border: 1px solid #777e90;
  }

  .active {
    background: var(--bg-primery);
  }

  img {
    padding: ${props => (props.name.home ? '0' : '16px 12px')};
    border: ${props =>
      props.name.home ? 'none' : '1px solid var(--bg-primery)'};
  }

  @media screen and (min-width: 768px) {
    align-self: center;
    max-width: ${props => (props.name.home ? '704px' : '648px')};
  }

  @media screen and (min-width: 1440px) {
    max-width: ${props => props.name.home && '1120px'};

    .gallery {
      gap: 24px;
    }
  }
`;
