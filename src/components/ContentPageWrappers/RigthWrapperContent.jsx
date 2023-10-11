import { confirmNamePage } from 'helpers/confirmNamePage';
import { useLocation } from 'react-router-dom';
import { StyledRigthWrapperContent } from './RigthWrapperContent.styled';

export default function RigthWrapperContent({ children }) {
  const location = useLocation();

  return (
    <StyledRigthWrapperContent $name={confirmNamePage(location.pathname)}>
      {children}
    </StyledRigthWrapperContent>
  );
}
