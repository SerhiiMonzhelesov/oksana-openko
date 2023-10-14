import sprite from '../../assets/images/icons.svg';
import PriceTable from 'components/PriceTable/PriceTable';
import { StyledPriceField } from './PriceField.styled';

export default function PriceField({ name }) {
  return (
    <>
      <StyledPriceField name={name}>
        <h2>Вартість:</h2>
        <div className="accent-block-wrapp">
          {(name.education || name.satisfaction) && (
            <>
              <p className="first-additional-text">
                {name.satisfaction
                  ? 'Наразі триває передзапис на практикум.'
                  : 'Запис вебінару'}
              </p>
              {name.satisfaction ? (
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
          {!name.satisfaction && <PriceTable name={name} />}
        </div>
      </StyledPriceField>
    </>
  );
}
