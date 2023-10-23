import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function LinkBonus() {
  return (
    <StyledLinkBonus
      to={'https://t.me/oksana_openko_sexolog/10'}
      target="_blank"
      aria-label="Go to Telegram for a free video lesson"
    >
      ДАРУЮ БЕЗКОШТОВНИЙ ВІДЕО-УРОК для батьків “10 фраз, що варто говорити
      дитині для формування її майбутньої здорової сексуальності”
    </StyledLinkBonus>
  );
}

const StyledLinkBonus = styled(Link)`
  color: var(--primery-text);
  font-family: 'ProximaNova-500';
  font-weight: 500;
  line-height: 1.5;
  text-decoration: underline;
  text-underline-offset: 4px;
  margin-bottom: 56px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 38px;
  }
`;
