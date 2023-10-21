import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { confirmNamePage } from 'helpers/confirmNamePage';
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import Container from 'components/Container/Container';
import MainWrapperContent from 'components/ContentPageWrappers/MainWrapperContent';
import LeftWrapperContent from 'components/ContentPageWrappers/LeftWrapperContent';
import MediaThumb from 'components/MediaThumb/MediaThumb';
import TitlePages from 'components/TitlePages/TitlePages';
import RigthWrapperContent from 'components/ContentPageWrappers/RigthWrapperContent';
import DescriptionAccentPage from 'components/contentPagesComponents/DescriptionAccentPage';
import TextField from 'components/contentPagesComponents/TextField';
import ButtonApplication from 'components/ButtonApplication/ButtonApplication';
import PriceField from 'components/PriceField/PriceField';
import SliderSimple from 'components/Slider/SliderSimple';

export default function PlayingWithCardsPage() {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const namePage = confirmNamePage(location.pathname);
  const titlePage = 'Гра з картками';
  return (
    <section>
      <Container>
        <MainWrapperContent name={namePage}>
          {isMobile && (
            <>
              <BreadCrumbs titlePage={titlePage} name={namePage} />
              <TitlePages titlePage={titlePage} name={namePage} />
              <MediaThumb name={namePage} />
              <DescriptionAccentPage name={namePage} />
              <TextField name={namePage} />
              <SliderSimple title="Відгуки" name={namePage} />
              <PriceField name={namePage} />
            </>
          )}

          {isTablet && (
            <>
              <LeftWrapperContent name={namePage}>
                <BreadCrumbs titlePage={titlePage} name={namePage} />
                <TitlePages titlePage={titlePage} name={namePage} />
                <DescriptionAccentPage name={namePage} />
                <TextField name={namePage} />
              </LeftWrapperContent>
              <RigthWrapperContent name={namePage}>
                <MediaThumb name={namePage} />
                <PriceField name={namePage} />
              </RigthWrapperContent>
              <SliderSimple title="Відгуки" name={namePage} />
            </>
          )}
          <ButtonApplication />
        </MainWrapperContent>
      </Container>
    </section>
  );
}
