import { StyledTable } from './PriceTable.styled';

export default function PriceTable({ name }) {
  return (
    <StyledTable name={name}>
      <thead>
        <tr className="first-row">
          <td className="first-cell"></td>
          <td className="second-cell">Індивідуальна</td>
          <td className="third-cell">Для пари</td>
        </tr>
      </thead>
      <tbody>
        <tr className="second-row">
          <td className="first-cell">{name.cards ? '' : 'Офлайн'}</td>
          <td className="second-cell">900 грн.</td>
          <td className="third-cell">1200 грн.</td>
        </tr>
        <tr className="third-row">
          <td className="first-cell">{name.cards ? '' : 'Онлайн'}</td>
          <td className="second-cell">700 грн.</td>
          <td className="third-cell">
            {name.cards ? '850 грн.' : '1000 грн.'}
          </td>
        </tr>
      </tbody>
    </StyledTable>
  );
}
