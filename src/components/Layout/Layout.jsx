import {
  // NavLink,
  Outlet,
} from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';
import Container from '../Container/Container';
import Footer from 'components/Footer/Footer';
import { StyledFooter } from 'components/Footer/Footer.styled';

export default function Layout() {
  const handleScrollToTop = event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header style={{ borderBottom: '1px solid grey' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <NavLink smooth to="/" style={{ paddingBottom: 16, paddingTop: 16 }}>
            Оксана Опенько
          </NavLink>
          <NavLink
            to="/#about-me"
            smooth
            style={{ paddingBottom: 16, paddingTop: 16 }}
          >
            Про мене
          </NavLink>
          <NavLink
            smooth
            to={'/#services'}
            style={{ paddingBottom: 16, paddingTop: 16 }}
          >
            Послуги
          </NavLink>
          <NavLink
            smooth
            to={'/#rules'}
            style={{ paddingBottom: 16, paddingTop: 16 }}
          >
            Правила роботи
          </NavLink>
          <NavLink
            smooth
            to={'/#contacts'}
            style={{ paddingBottom: 16, paddingTop: 16 }}
          >
            Контакти
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <StyledFooter>
        <Container>
          <Footer />
        </Container>
      </StyledFooter>
    </>
  );
}
