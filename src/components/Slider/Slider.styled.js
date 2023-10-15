import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import { Swiper } from 'swiper/react';

export const StyledSliderAboutSubtitle = styled.h3`
  margin-bottom: 24px;
  font-family: 'ProximaNova-600';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  color: var(--main-text);
`;

export const StyledSwiper = styled(Swiper)`
  padding-bottom: 24px;

  display: flex;
  width: 100%;
  height: 100%;
  .swiper-wrapper {
    justify-content: space-between;
    padding-bottom: 24px;
  }

  //pagination
  .swiper-pagination-bullet {
    margin: 0 12px;
    width: 12px;
    height: 12px;
    border: 1px solid #777e90;
    background-color: #f2f1f3;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--bg-primery);
  }
  img {
    padding: ${props => (props.name.consultation ? '0' : '16px 12px')};
    border: ${props =>
      props.name.consultation ? 'none' : '1px solid var(--bg-primery)'};

    @media screen and (max-width: 767px) {
      margin: 0 auto;
    }
  }
`;
