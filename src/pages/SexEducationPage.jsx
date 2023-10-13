import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import Container from 'components/Container/Container';
import MainWrapperContent from 'components/ContentPageWrappers/MainWrapperContent';
import LeftWrapperContent from 'components/ContentPageWrappers/LeftWrapperContent';
import MediaThumb from 'components/MediaThumb/MediaThumb';
import TitlePages from 'components/TitlePages/TitlePages';
import { useMediaQuery } from 'react-responsive';
import RigthWrapperContent from 'components/ContentPageWrappers/RigthWrapperContent';
import ListField from 'components/contentPagesComponents/ListField';
import TextField from 'components/contentPagesComponents/TextField';
import { Link } from 'react-router-dom';
import LinkBonus from 'components/LinkBonus/LinkBonus';

export default function SexEducationPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1439,
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const namePage = 'Статеве виховання';
  return (
    <>
      <section>
        <Container>
          <MainWrapperContent>
            {isMobile && (
              <>
                <BreadCrumbs namePage={namePage} />
                <TitlePages namePage={namePage} />
                <MediaThumb />
                <TextField />
                <LinkBonus />
                <ListField />
              </>
            )}

            {isTablet && (
              <>
                <LeftWrapperContent>
                  <BreadCrumbs namePage={namePage} />
                  <TitlePages namePage={namePage} />
                  <TextField />
                  <LinkBonus />
                </LeftWrapperContent>
                <RigthWrapperContent>
                  <MediaThumb />
                </RigthWrapperContent>
                <ListField />
              </>
            )}
            {isDesktop && (
              <>
                <LeftWrapperContent>
                  <BreadCrumbs namePage={namePage} />
                  <TitlePages namePage={namePage} />
                  <TextField />
                  <LinkBonus />
                  <ListField />
                </LeftWrapperContent>
                <RigthWrapperContent>
                  <MediaThumb />
                </RigthWrapperContent>
              </>
            )}
          </MainWrapperContent>
        </Container>
      </section>
    </>
  );
}
