import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import Container from 'components/Container/Container';
import TitlePages from 'components/TitlePages/TitlePages';

export default function SelfSatisfactionWorkPage() {
  const namePage = 'Практикум по самозадоволенню';
  return (
    <section>
      <Container>
        <BreadCrumbs namePage={namePage} />
        <TitlePages namePage={namePage} />
      </Container>
    </section>
  );
}
