import { confirmNamePage } from 'helpers/confirmNamePage';
import { useLocation } from 'react-router';
import { StyledTextField } from './TextField.styled';
import textContent from '../../data/pagesTextContent';

export default function TextField() {
  const location = useLocation();
  const pathPage = location.pathname;

  const { path_page, text_block1, text_block2 } = textContent.find(item =>
    pathPage.includes(item.path_page)
  );

  const sentences = text_block1.split('. ');

  return (
    <StyledTextField $name={confirmNamePage(location.pathname)}>
      {path_page === 'education' ? (
        <p className="first-text">
          {sentences[0]}.<br />
          {sentences[1]}.<br />
          {sentences[2]}.<br />
          {sentences[3]}
        </p>
      ) : (
        <p className="first-text">{text_block1}</p>
      )}
      <p className="second-text">{text_block2}</p>
    </StyledTextField>
  );
}
