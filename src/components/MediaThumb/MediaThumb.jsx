import { useMediaQuery } from 'react-responsive';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import images from '../../data/pagesMedia';
import { StyledMediaThumb } from './MediaThumb.styled.js';
import SliderVideo from 'components/SliderVideo.jsx/SliderVideo';

export default function MediaThumb({ name }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1439.9,
  });

  const imagesPage = images.find(item => name[item.path_page] === true);

  return (
    <StyledMediaThumb name={name}>
      {name.speaker ? (
        <SliderVideo />
      ) : name.cards ? (
        <video
          width="342"
          height="376"
          src="https://res.cloudinary.com/dlpvvcdpd/video/upload/v1698178332/cards_jheuuf.mp4"
          poster="https://res.cloudinary.com/dlpvvcdpd/image/upload/v1698338990/cards_nisqpm.jpg"
          controls
          preload="none"
        ></video>
      ) : (
        <img
          data-src={
            isMobile
              ? imagesPage.img_mobile
              : isTablet
              ? imagesPage.img_tablet
              : imagesPage.img_desktop
          }
          alt={imagesPage.alt_img}
          width={isMobile ? '343' : isTablet ? '342' : '448'}
          className="lazyload blur-up"
        />
      )}
    </StyledMediaThumb>
  );
}
