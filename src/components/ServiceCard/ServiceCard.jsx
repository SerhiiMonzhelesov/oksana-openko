import { StyledLinkCard, StyledServiceCard } from './ServiceCard.styled.js';

export default function ServiceCard({ service }) {
  const { name, img, alt_img, path_to_page } = service;

  return (
    <>
      <StyledServiceCard>
        <StyledLinkCard to={path_to_page}>
          <img src={img} alt={alt_img} width="352" />
          <p>{name}</p>
        </StyledLinkCard>
      </StyledServiceCard>
    </>
  );
}
