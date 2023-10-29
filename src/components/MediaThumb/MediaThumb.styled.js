import styled from 'styled-components';

export const StyledMediaThumb = styled.div`
  width: 100%;
  max-width: 343px;
  height: 376px;
  margin-bottom: ${props =>
    props.name.education ? '55px' : props.name.speaker ? '54px' : '56px'};

  img {
    width: 100%;
    max-width: 343px;
  }

  video {
    width: 343px;
    height: 376px;
    object-fit: cover;
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
    max-width: 342px;
    height: 500px;
    margin-bottom: 0;
    margin-bottom: ${props =>
      props.name.psychotherapy
        ? '74px'
        : props.name.cards
        ? '96px'
        : props.name.speaker
        ? '64px'
        : props.name.satisfaction
        ? '68px'
        : '24px'};

    img {
      max-width: 342px;
    }
    video {
      width: 342px;
      height: 500px;
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 448px;
    height: 656px;
    margin-bottom: ${props =>
      props.name.consultation
        ? '54px'
        : props.name.education
        ? '77px'
        : props.name.speaker
        ? '48px'
        : props.name.satisfaction
        ? '99px'
        : '24px'};

    img {
      max-width: 448px;
    }
    video {
      width: 448px;
      height: 656px;
    }
  }
`;
