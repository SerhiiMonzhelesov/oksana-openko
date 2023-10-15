import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import { confirmNamePage } from 'helpers/confirmNamePage';

import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import Container from 'components/Container/Container';
import MainWrapperContent from 'components/ContentPageWrappers/MainWrapperContent';
import LeftWrapperContent from 'components/ContentPageWrappers/LeftWrapperContent';
import MediaThumb from 'components/MediaThumb/MediaThumb';
import TitlePages from 'components/TitlePages/TitlePages';
import RigthWrapperContent from 'components/ContentPageWrappers/RigthWrapperContent';
import ListField from 'components/contentPagesComponents/ListField';
import TextField from 'components/contentPagesComponents/TextField';
import Slider from 'components/Slider/Slider';
import { sexEducationSlider } from 'data/dataSexEducationFeedback';

import LinkBonus from 'components/LinkBonus/LinkBonus';
import ButtonApplication from 'components/ButtonApplication/ButtonApplication';
import PriceField from 'components/PriceField/PriceField';

export default function SexEducationPage() {
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1439,
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const namePage = confirmNamePage(location.pathname);
  const titlePage = 'Статеве виховання';

  return (
    <>
      <section>
        <Container>
          <MainWrapperContent name={namePage}>
            {isMobile && (
              <>
                <BreadCrumbs titlePage={titlePage} name={namePage} />
                <TitlePages titlePage={titlePage} name={namePage} />
                <MediaThumb name={namePage} />
                <TextField name={namePage} />
                <LinkBonus />
                <ListField name={namePage} />
                <PriceField name={namePage} />
              </>
            )}

            {isTablet && (
              <>
                <LeftWrapperContent name={namePage}>
                  <BreadCrumbs titlePage={titlePage} name={namePage} />
                  <TitlePages titlePage={titlePage} name={namePage} />
                  <TextField name={namePage} />
                  <LinkBonus />
                </LeftWrapperContent>
                <RigthWrapperContent name={namePage}>
                  <MediaThumb name={namePage} />
                  <PriceField name={namePage} />
                </RigthWrapperContent>
                <ListField name={namePage} />
              </>
            )}
            {isDesktop && (
              <>
                <LeftWrapperContent name={namePage}>
                  <BreadCrumbs titlePage={titlePage} name={namePage} />
                  <TitlePages titlePage={titlePage} name={namePage} />
                  <TextField name={namePage} />
                  <LinkBonus />
                  <ListField name={namePage} />
                </LeftWrapperContent>
                <RigthWrapperContent name={namePage}>
                  <MediaThumb name={namePage} />
                  <PriceField name={namePage} />
                </RigthWrapperContent>
              </>
            )}
            <ButtonApplication />
          </MainWrapperContent>
          <Slider title="Відгуки" data={sexEducationSlider} />
        </Container>
      </section>
    </>
  );
}
