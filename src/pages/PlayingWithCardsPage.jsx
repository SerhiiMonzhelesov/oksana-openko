import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import Container from 'components/Container/Container';
import MainWrapperContent from 'components/ContentPageWrappers/MainWrapperContent';
import LeftWrapperContent from 'components/ContentPageWrappers/LeftWrapperContent';
import MediaThumb from 'components/MediaThumb/MediaThumb';
import TitlePages from 'components/TitlePages/TitlePages';
import { useMediaQuery } from 'react-responsive';
import RigthWrapperContent from 'components/ContentPageWrappers/RigthWrapperContent';
import DescriptionAccentPage from 'components/contentPagesComponents/DescriptionAccentPage';
import TextField from 'components/contentPagesComponents/TextField';
import ButtonApplication from 'components/ButtonApplication/ButtonApplication';
import PriceField from 'components/PriceField/PriceField';

export default function PlayingWithCardsPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const namePage = 'Гра з картками';
  return (
    <section>
      <Container>
        <MainWrapperContent>
          {isMobile && (
            <>
              <BreadCrumbs namePage={namePage} />
              <TitlePages namePage={namePage} />
              <MediaThumb />
              <DescriptionAccentPage />
              <TextField />
              <PriceField />
            </>
          )}

          {isTablet && (
            <>
              <LeftWrapperContent>
                <BreadCrumbs namePage={namePage} />
                <TitlePages namePage={namePage} />
                <DescriptionAccentPage />
                <TextField />
              </LeftWrapperContent>
              <RigthWrapperContent>
                <MediaThumb />
                <PriceField />
              </RigthWrapperContent>
            </>
          )}
          <ButtonApplication />
        </MainWrapperContent>
      </Container>
    </section>
  );
}
