import { Link } from 'react-router-dom';
import { StyledBreadCrumbs } from './BreadCrumbs.styled';
import sprite from '../../assets/images/icons.svg';

export default function BreadCrumbs({ namePage }) {
  const isConsultationPage = namePage === 'Консультація';
  const isSelfSatisfactionPage = namePage === 'Практикум по самозадоволенню';

  return (
    <StyledBreadCrumbs
      $consultation={isConsultationPage}
      $satisfaction={isSelfSatisfactionPage}
    >
      <Link to="/">Послуги</Link>
      <svg>
        <use href={sprite + '#chevron-right'}></use>
      </svg>
      <p>{namePage}</p>
    </StyledBreadCrumbs>
  );
}
