import { StyledTitlePages } from './TitlePages.styled';

export default function TitlePages({ namePage }) {
  const isSexEducationPage = namePage === 'Статеве виховання';
  const isInvitedSpeakerPage = namePage === 'Запрошений спікер';
  const isPsychotherapyPage = namePage === 'Психотерапія';
  const isSelfSatisfactionPage = namePage === 'Практикум по самозадоволенню';
  const isPlayingCardsPage = namePage === 'Гра з картками';

  return (
    <StyledTitlePages
      $education={isSexEducationPage}
      $speaker={isInvitedSpeakerPage}
      $psychotherapy={isPsychotherapyPage}
      $satisfaction={isSelfSatisfactionPage}
      $cards={isPlayingCardsPage}
    >
      {namePage}
    </StyledTitlePages>
  );
}
