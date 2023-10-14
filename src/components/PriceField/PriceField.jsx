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
        <div className="accent-block-wrapp">
          {(namePage.education || namePage.satisfaction) && (
            <>
              <p className="first-additional-text">
                {namePage.satisfaction
                  ? 'Наразі триває передзапис на практикум.'
                  : 'Запис вебінару'}
              </p>
              {namePage.satisfaction ? (
                <p className="second-additional-text">
                  Залишивши заявку, ви першими дізнаєтесь про дату проведення та
                  всі умови участі.
                </p>
              ) : (
                <p className="second-additional-text">
                  399 грн. +
                  <svg width="24px" height="24px">
                    <use href={sprite + '#gift'}></use>
                  </svg>
                  бонус
                </p>
              )}
            </>
          )}
          {!namePage.satisfaction && <PriceTable name={namePage} />}
        </div>
      </StyledPriceField>
    </>
  );
}
