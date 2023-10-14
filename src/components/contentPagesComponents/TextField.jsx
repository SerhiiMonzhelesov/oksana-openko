import { StyledTextField } from './TextField.styled';
import textContent from '../../data/pagesTextContent';

export default function TextField({ name }) {
  const { path_page, text_block1, text_block2 } = textContent.find(
    item => name[item.path_page] === true
  );

  const sentences = text_block1.split('. ');

  return (
    <StyledTextField name={name}>
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
