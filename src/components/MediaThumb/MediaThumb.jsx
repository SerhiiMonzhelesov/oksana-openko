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
