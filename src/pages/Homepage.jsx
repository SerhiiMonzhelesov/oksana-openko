import AboutMeSection from 'components/AboutMeSection/AboutMeSection';
import HeroSection from 'components/HeroSection/HeroSection';
import LeaveRequestSection from 'components/LeaveRequestSection/LeaveRequestSection';
import RulesSection from 'components/RulesSection/RulesSection';
import ServicesSection from 'components/ServicesSection/ServicesSection';
import { confirmNamePage } from 'helpers/confirmNamePage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getWakeUpServer } from 'services/api-service';

function HomePage() {
  const location = useLocation();
  const namePage = confirmNamePage(location.pathname);

  useEffect(() => {
    getWakeUpServer();
  }, []);

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
