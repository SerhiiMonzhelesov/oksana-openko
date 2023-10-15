import { StyledLinkCard, StyledServiceCard } from './ServiceCard.styled.js';

export default function ServiceCard({ service }) {
  const { name, img, alt_img, path_to_page } = service;

  const pathToTop = `${path_to_page}#top`;

  return (
    <>
      <StyledServiceCard>
        <StyledLinkCard to={pathToTop}>
          <img src={img} alt={alt_img} width="352" />
          <p>{name}</p>
        </StyledLinkCard>
      </StyledServiceCard>
    </>
  );
}
