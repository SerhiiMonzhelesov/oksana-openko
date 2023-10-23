import { HashLink as Link } from 'react-router-hash-link';

import { StyledBreadCrumbs } from './BreadCrumbs.styled';
import sprite from '../../assets/images/icons.svg';

export default function BreadCrumbs({ titlePage, name }) {
  const scrollWithOffset = el => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -79;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };
  return (
    <StyledBreadCrumbs name={name}>
      <Link
        smooth
        to="/#services"
        scroll={el => scrollWithOffset(el)}
        aria-label="Navigate to services on homepage"
      >
        Послуги
      </Link>
      <svg>
        <use href={sprite + '#chevron-right'}></use>
      </svg>
      <p>{titlePage}</p>
    </StyledBreadCrumbs>
  );
}
