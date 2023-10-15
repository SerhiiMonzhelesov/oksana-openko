import { StyledLeftWrapperContent } from './LeftWrapperContent.styled';

export default function LeftContentWrapper({ children, name }) {
  return (
    <StyledLeftWrapperContent name={name}>{children}</StyledLeftWrapperContent>
  );
}
