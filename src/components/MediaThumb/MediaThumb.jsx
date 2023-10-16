import { useMediaQuery } from 'react-responsive';

import images from '../../data/pagesMedia';
import { StyledMediaThumb } from './MediaThumb.styled.js';

export default function MediaThumb({ name }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1439.9,
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const imagesPage = images.find(item => name[item.path_page] === true);

  return (
    <>
      {isMobile && (
        <StyledMediaThumb name={name}>
          <img
            src={imagesPage.img_mobile}
            alt={imagesPage.alt_img}
            width="343"
          />
        </StyledMediaThumb>
      )}
      {isTablet && (
        <StyledMediaThumb name={name}>
          <img
            src={imagesPage.img_tablet}
            alt={imagesPage.alt_img}
            width="342"
          />
        </StyledMediaThumb>
      )}
      {isDesktop && (
        <StyledMediaThumb name={name}>
          <img
            src={imagesPage.img_desktop}
            alt={imagesPage.alt_img}
            width="448"
          />
        </StyledMediaThumb>
      )}
    </>
  );
}
