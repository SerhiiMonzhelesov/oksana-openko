import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { confirmNamePage } from 'helpers/confirmNamePage';
import { StyledListField } from './ListField.styled.js';
import sprite from '../../assets/images/icons.svg';
import textContent from '../../data/pagesTextContent';

export default function ListField() {
  const location = useLocation();

  const pathPage = location.pathname;

  const { titleList, dataList } = textContent.find(item =>
    pathPage.includes(item.path_page)
  );

  return (
    <>
      <StyledListField $name={confirmNamePage(location.pathname)}>
        {titleList === 'create title' ? (
          <p className="title-list">
            Якщо ви відчуваєте себе не впевненими при розмові з дітьми{' '}
            <span className="accent-text">“про це”</span>, пропоную вам:
          </p>
        ) : (
          <p className="title-list">{titleList}</p>
        )}

        <ul>
          {dataList.map(item => {
            if (item === 'create text')
              return (
                <li key={nanoid()}>
                  <div className="icon-wrapper">
                    <svg className="icon-marker" width="6px" height="6px">
                      <use href={sprite + '#marker'}></use>
                    </svg>
                  </div>
                  <p>
                    або придбати запис вебінару для батьків дітей віком від 0 до
                    16 років{' '}
                    <span className="accent-phrase">“Статеве виховання”</span>.
                    Про що, як і коли говорити з дітьми про це”, в якому півтори
                    години чіткоЇ, структурованої інформації про найголовніше
                    (відповіді на більше ніж 30 найактуальніших питань) з
                    прикладами, ілюстраціями та поясненням.
                  </p>
                </li>
              );
            return (
              <li key={nanoid()}>
                <div className="icon-wrapper">
                  <svg className="icon-marker" width="6px" height="6px">
                    <use href={sprite + '#marker'}></use>
                  </svg>
                </div>
                {item}
              </li>
            );
          })}
        </ul>
      </StyledListField>
    </>
  );
}
