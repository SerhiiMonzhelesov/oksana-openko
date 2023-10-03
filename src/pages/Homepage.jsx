import AboutMeSection from 'components/AboutMeSection/AboutMeSection';
import HeroSection from 'components/HeroSection/HeroSection';
import LeaveRequestSection from 'components/LeaveRequestSection/LeaveRequestSection';
import RulesSection from 'components/RulesSection/RulesSection';
import ServicesSection from 'components/ServicesSection/ServicesSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <RulesSection />
      <LeaveRequestSection />
    </>
  );
}
