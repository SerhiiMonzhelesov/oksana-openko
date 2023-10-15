import { SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Zoom,
} from 'swiper/modules';
import { StyledSliderAboutSubtitle, StyledSwiper } from './Slider.styled';
import { useLocation } from 'react-router-dom';
import { confirmNamePage } from 'helpers/confirmNamePage';

const Slider = ({ data, title }) => {
  const location = useLocation();
  const namePage = confirmNamePage(location.pathname);
  console.log('fff', namePage);

  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  };

  return (
    <>
      <StyledSliderAboutSubtitle>{title}</StyledSliderAboutSubtitle>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard, Zoom]}
        pagination={{ clickable: true }}
        breakpoints={breakpoints}
        zoom={true}
        centeredSlides={true}
        keyboard={{ enabled: true }}
        // rewind={true}
        loop={true}
        name={namePage}
      >
        {data.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
              />
            </div>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
};

export default Slider;
