import { StyledDescriptionAccent } from './DescriptionAccentPage.styled';

export default function DescriptionAccentPage({ name }) {
  return (
    <>
      {name.consultation && (
        <StyledDescriptionAccent name={name}>
          Консультації можуть бути <span>індивідуальні</span> або{' '}
          <span>для пари.</span>
        </StyledDescriptionAccent>
      )}
      {name.cards && (
        <StyledDescriptionAccent name={name}>
          Авторська гра з картками “30 питань про секс для пари”
        </StyledDescriptionAccent>
      )}
    </>
  );
}
