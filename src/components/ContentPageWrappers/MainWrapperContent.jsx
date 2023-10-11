import { useLocation } from 'react-router-dom';
import { StyledMainWrapperContent } from './MainWrapperContent.styled.js';
import { confirmNamePage } from 'helpers/confirmNamePage';

export default function ContentPageWrapper({ children }) {
  const location = useLocation();

  return (
    <StyledMainWrapperContent $name={confirmNamePage(location.pathname)}>
      {children}
    </StyledMainWrapperContent>
  );
}
