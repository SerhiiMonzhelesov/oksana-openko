import { HashLink as Link } from 'react-router-hash-link';

import { StyledBreadCrumbs } from './BreadCrumbs.styled';
import sprite from '../../assets/images/icons.svg';

export default function BreadCrumbs({ titlePage, name }) {
  return (
    <StyledBreadCrumbs name={name}>
      <Link smooth to="/#services">
        Послуги
      </Link>
      <svg>
        <use href={sprite + '#chevron-right'}></use>
      </svg>
      <p>{titlePage}</p>
    </StyledBreadCrumbs>
  );
}
