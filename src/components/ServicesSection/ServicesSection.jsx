import Container from 'components/Container/Container';
import ServicesList from 'components/ServicesList/ServicesList';
import { StyledServicesSection } from './ServicesSection.styled.js';

export default function ServicesSection() {
  return (
    <>
      <StyledServicesSection id="services">
        <Container>
          <h2>Послуги</h2>
          <ServicesList />
        </Container>
      </StyledServicesSection>
    </>
  );
}
