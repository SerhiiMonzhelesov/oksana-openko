import PriceTable from 'components/PriceTable/PriceTable';
import { StyledPriceField } from './PriceField.styled';
import { confirmNamePage } from 'helpers/confirmNamePage';
import { useLocation } from 'react-router-dom';
import sprite from '../../assets/images/icons.svg';

export default function PriceField() {
  const location = useLocation();

  const namePage = confirmNamePage(location.pathname);

  return (
    <>
      <StyledPriceField name={namePage}>
        <h2>Вартість:</h2>
        {namePage.consultation && (
          <div className="accent-block-wrapp">
            <PriceTable name={namePage} />
          </div>
        )}
        {namePage.education && (
          <div className="accent-block-wrapp">
            <p className="first-additional-text">Запис вебінару</p>
            <p className="second-additional-text">
              399 грн. +{' '}
              <svg width="24px" height="24px">
                <use href={sprite + '#gift'}></use>
              </svg>{' '}
              бонус
            </p>
            <PriceTable name={namePage} />
          </div>
        )}
      </StyledPriceField>
    </>
  );
}
