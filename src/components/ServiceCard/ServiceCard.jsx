import { Link } from 'react-router-dom';
import { StyledServiceCard } from './StyledServiceCard';

export default function ServiceCard({ service }) {
  const { name, img, alt_img, path_to_page } = service;

  return (
    <>
      <StyledServiceCard>
        <Link to={path_to_page}>
          <img src={img} alt={alt_img} width="352" />
          <p>{name}</p>
        </Link>
      </StyledServiceCard>
    </>
  );
}
