import { StyledRigthWrapperContent } from './RigthWrapperContent.styled';

export default function RigthWrapperContent({ children, name }) {
  return (
    <StyledRigthWrapperContent name={name}>
      {children}
    </StyledRigthWrapperContent>
  );
}
