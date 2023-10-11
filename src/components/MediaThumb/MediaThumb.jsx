import { useLocation } from 'react-router-dom';
import images from '../../data/pagesMedia';
import { StyledMediaThumb } from './MediaThumb.styled.js';
import { confirmNamePage } from 'helpers/confirmNamePage';
import { useMediaQuery } from 'react-responsive';

export default function MediaThumb() {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1439,
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const pathPage = location.pathname;

  const imagesPage = images.find(item => pathPage.includes(item.path_page));

  return (
    <>
      {isMobile && (
        <StyledMediaThumb $name={confirmNamePage(location.pathname)}>
          <img
            src={imagesPage.img_mobile}
            alt={imagesPage.alt_img}
            width="343"
          />
        </StyledMediaThumb>
      )}
      {isTablet && (
        <StyledMediaThumb $name={confirmNamePage(location.pathname)}>
          <img
            src={imagesPage.img_tablet}
            alt={imagesPage.alt_img}
            width="342"
          />
        </StyledMediaThumb>
      )}
      {isDesktop && (
        <StyledMediaThumb $name={confirmNamePage(location.pathname)}>
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
