import { confirmNamePage } from 'helpers/confirmNamePage';
import { useLocation } from 'react-router-dom';
import {  StyledLeftWrapperContent } from './LeftWrapperContent.styled';

export default function LeftContentWrapper({ children }) {
  const location = useLocation();

  return (
    <StyledLeftWrapperContent $name={confirmNamePage(location.pathname)}>
      {children}
    </StyledLeftWrapperContent>
  );
}
