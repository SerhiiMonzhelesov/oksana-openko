import {
  // NavLink,
  Outlet,
} from 'react-router-dom';
// import { HashLink as NavLink } from 'react-router-hash-link';
import Container from '../Container/Container';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { StyledFooter } from 'components/Footer/Footer.styled';

export default function Layout() {
  const handleScrollToTop = event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <StyledFooter>
        <Container>
          <Footer handleScrollToTop={handleScrollToTop} />
        </Container>
      </StyledFooter>
    </>
  );
}
