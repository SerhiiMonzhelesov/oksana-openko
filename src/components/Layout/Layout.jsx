import {
  // NavLink,
  Outlet,
} from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';
import Container from '../Container/Container';
import Header from 'components/Header/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer style={{ height: 56, borderTop: '1px solid grey' }}>
        <Container>
          <NavLink to="/" style={{ paddingBottom: 12, paddingTop: 12 }}>
            Оксана Опенько
          </NavLink>
          <NavLink style={{ paddingBottom: 12, paddingTop: 12 }}>
            Instagram
          </NavLink>
          <NavLink style={{ paddingBottom: 12, paddingTop: 12 }}>
            Telegram
          </NavLink>
          <NavLink style={{ paddingBottom: 12, paddingTop: 12 }}>
            Facebook
          </NavLink>
        </Container>
      </footer>
    </>
  );
}
