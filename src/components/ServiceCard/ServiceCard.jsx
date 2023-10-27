import { useMediaQuery } from 'react-responsive';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { StyledLinkCard, StyledServiceCard } from './ServiceCard.styled.js';

export default function ServiceCard({ service }) {
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1439.9,
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const { name, img, alt_img, path_to_page, webpSrc } = service;

  const pathToTop = `${path_to_page}#top`;

  return (
    <>
      <StyledServiceCard>
        <StyledLinkCard
          to={pathToTop}
          aria-label={`Go to ${path_to_page} page`}
        >
          <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <img
              data-src={img}
              alt={alt_img}
              width={isTablet ? '221' : isDesktop ? '352' : '343'}
              height={isTablet ? '235' : isDesktop ? '376' : '366'}
              className="lazyload blur-up"
            />
          </picture>
          <p>{name}</p>
        </StyledLinkCard>
      </StyledServiceCard>
    </>
  );
}
