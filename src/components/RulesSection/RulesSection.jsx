import Container from 'components/Container/Container';
import { leftRules, rejections, rightRules } from '../../data/rules';
import {
  StyledRulesList,
  StyledRulesSubtitle,
  StyledRulesTitle,
} from './Rules.styled';
import Item from './RulesList/Item';
import { StyledRulesSection } from './Rules.styled';
import { StyledListWrapper } from './Rules.styled';

export default function RulesSection() {
  return (
    <>
      <StyledRulesSection id="rules">
        <Container>
          <StyledRulesTitle>Правила роботи</StyledRulesTitle>
          <StyledListWrapper>
            <ul>
              {leftRules.map((rule, index) => (
                <Item key={`left-${index}`} text={rule} />
              ))}
            </ul>
            <ul style={{ gap: '8px' }}>
              {rightRules.map((rule, index) => (
                <Item key={`right-${index}`} text={rule} />
              ))}
            </ul>
          </StyledListWrapper>

          <StyledRulesSubtitle>На консультаціях я:</StyledRulesSubtitle>
          <StyledRulesList>
            {rejections.map((item, index) => (
              <Item key={index} text={item} />
            ))}
          </StyledRulesList>
        </Container>
      </StyledRulesSection>
    </>
  );
}
