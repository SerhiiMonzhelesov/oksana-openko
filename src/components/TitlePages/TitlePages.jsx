import { useLocation } from 'react-router-dom';
import { StyledTitlePages } from './TitlePages.styled';
import { confirmNamePage } from 'helpers/confirmNamePage';

export default function TitlePages({ namePage }) {
  const location = useLocation();

  return (
    <StyledTitlePages $name={confirmNamePage(location.pathname)}>
      {namePage}
    </StyledTitlePages>
  );
}
