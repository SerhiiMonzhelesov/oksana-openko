import { Link, useLocation } from 'react-router-dom';
import { StyledBreadCrumbs } from './BreadCrumbs.styled';
import sprite from '../../assets/images/icons.svg';
import { confirmNamePage } from 'helpers/confirmNamePage';

export default function BreadCrumbs({ namePage }) {
  const location = useLocation();

  return (
    <StyledBreadCrumbs $name={confirmNamePage(location.pathname)}>
      <Link to="/">Послуги</Link>
      <svg>
        <use href={sprite + '#chevron-right'}></use>
      </svg>
      <p>{namePage}</p>
    </StyledBreadCrumbs>
  );
}
