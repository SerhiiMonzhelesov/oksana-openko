import { confirmNamePage } from 'helpers/confirmNamePage';
import { StyledDescriptionAccent } from './DescriptionAccentPage.styled';
import { useLocation } from 'react-router-dom';

export default function DescriptionAccentPage() {
  const location = useLocation();
  const namePage = confirmNamePage(location.pathname);
  return (
    <>
      {namePage.consultation && (
        <StyledDescriptionAccent $name={confirmNamePage(location.pathname)}>
          Консультації можуть бути <span>індивідуальні</span> або{' '}
          <span>для пари.</span>
        </StyledDescriptionAccent>
      )}
      {namePage.cards && (
        <StyledDescriptionAccent $name={confirmNamePage(location.pathname)}>
          Авторська гра з картками “30 питань про секс для пари”
        </StyledDescriptionAccent>
      )}
    </>
  );
}
