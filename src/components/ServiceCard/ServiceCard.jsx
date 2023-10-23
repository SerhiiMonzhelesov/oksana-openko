import { useMediaQuery } from 'react-responsive';
import { StyledLinkCard, StyledServiceCard } from './ServiceCard.styled.js';

export default function ServiceCard({ service }) {
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1439.9,
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const { name, img, alt_img, path_to_page } = service;

  const pathToTop = `${path_to_page}#top`;

  return (
    <>
      <StyledServiceCard>
        <StyledLinkCard to={pathToTop}>
          <img src={img} alt={alt_img} width={isTablet ? "221" : isDesktop ? "352" : "343"} />
          <p>{name}</p>
        </StyledLinkCard>
      </StyledServiceCard>
    </>
  );
}
