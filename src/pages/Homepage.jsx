import AboutMeSection from 'components/AboutMeSection/AboutMeSection';
import HeroSection from 'components/HeroSection/HeroSection';
import LeaveRequestSection from 'components/LeaveRequestSection/LeaveRequestSection';
import RulesSection from 'components/RulesSection/RulesSection';
import ServicesSection from 'components/ServicesSection/ServicesSection';
import { confirmNamePage } from 'helpers/confirmNamePage';
import { useLocation } from 'react-router-dom';

function HomePage() {
  const location = useLocation();
  const namePage = confirmNamePage(location.pathname);
  return (
    <>
      <HeroSection />
      <AboutMeSection name={namePage} />
      <ServicesSection />
      <RulesSection />
      <LeaveRequestSection />
    </>
  );
}

export default HomePage;
