import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import Container from 'components/Container/Container';
import MainWrapperContent from 'components/ContentPageWrappers/MainWrapperContent';
import LeftWrapperContent from 'components/ContentPageWrappers/LeftWrapperContent';
import MediaThumb from 'components/MediaThumb/MediaThumb';
import TitlePages from 'components/TitlePages/TitlePages';
import { useMediaQuery } from 'react-responsive';
import RigthWrapperContent from 'components/ContentPageWrappers/RigthWrapperContent';
import TextField from 'components/contentPagesComponents/TextField';

export default function InvitedSpeakerPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const namePage = 'Запрошений спікер';
  return (
    <section>
      <Container>
        <MainWrapperContent>
          {isMobile && (
            <>
              <BreadCrumbs namePage={namePage} />
              <TitlePages namePage={namePage} />
              <MediaThumb />
              <TextField />
            </>
          )}
          {isTablet && (
            <>
              <LeftWrapperContent>
                <BreadCrumbs namePage={namePage} />
                <TitlePages namePage={namePage} />
                <TextField />
              </LeftWrapperContent>
              <RigthWrapperContent>
                <MediaThumb />
              </RigthWrapperContent>
            </>
          )}
        </MainWrapperContent>
      </Container>
    </section>
  );
}
