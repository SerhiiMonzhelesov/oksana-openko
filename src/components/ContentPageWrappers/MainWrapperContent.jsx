import { StyledMainWrapperContent } from './MainWrapperContent.styled.js';

export default function ContentPageWrapper({ children, name }) {
  return (
    <StyledMainWrapperContent name={name}>{children}</StyledMainWrapperContent>
  );
}
