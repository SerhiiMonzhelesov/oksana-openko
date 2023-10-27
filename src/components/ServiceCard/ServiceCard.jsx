import { useMediaQuery } from 'react-responsive';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { StyledLinkCard, StyledServiceCard } from './ServiceCard.styled.js';

export default function ServiceCard({ service }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1439.9,
  });

  const { name, img_mob, img_tablet, img_desktop, alt_img, path_to_page } =
    service;

  const pathToTop = `${path_to_page}#top`;

  return (
    <>
      <StyledServiceCard>
        <StyledLinkCard
          to={pathToTop}
          aria-label={`Go to ${path_to_page} page`}
        >
          <img
            data-src={isMobile ? img_mob : isTablet ? img_tablet : img_desktop}
            alt={alt_img}
            width={isMobile ? '343' : isTablet ? '221' : '352'}
            height={isMobile ? '366' : isTablet ? '235' : '376'}
            className="lazyload blur-up"
          />
          <p>{name}</p>
        </StyledLinkCard>
      </StyledServiceCard>
    </>
  );
}
