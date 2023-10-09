import { useLocation } from 'react-router-dom';
import { StyledBreadCrumbs } from './BreadCrumbs.styled';
import sprite from '../../assets/images/icons.svg';
import { confirmNamePage } from 'helpers/confirmNamePage';
import { HashLink as Link } from 'react-router-hash-link';

export default function BreadCrumbs({ namePage }) {
  const location = useLocation();

  return (
    <StyledBreadCrumbs $name={confirmNamePage(location.pathname)}>
      <Link smooth to="/#services">
        Послуги
      </Link>
      <svg>
        <use href={sprite + '#chevron-right'}></use>
      </svg>
      <p>{namePage}</p>
    </StyledBreadCrumbs>
  );
}
