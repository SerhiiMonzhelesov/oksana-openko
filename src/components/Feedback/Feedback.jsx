import Loader from 'components/Loader/Loader';
import SpriteSvg from '../../assets/images/icons.svg';
import {
  StyledButtonClose,
  StyledFeedback,
  StyledFeedbackContent,
  StyledFeedbackHeader,
  StyledFeedbackText,
  StyledFeedbackTitle,
  StyledWrapperFeedback,
} from './Feedback.styled';

export default function Feedback({ onFeedbackClose, isError, isLoading }) {
  return (
    <StyledWrapperFeedback>
      <StyledFeedback>
        <StyledFeedbackHeader>
          <svg width="88" height="88" viewBox="0 0 88 88">
            <use href={SpriteSvg + '#done'} />
          </svg>
        </StyledFeedbackHeader>

        <StyledFeedbackContent>
          {isLoading ? (
            <Loader section={'request'} />
          ) : (
            <>
              <StyledFeedbackTitle>
                {isError ? 'Помилка з’єднання з сервером!' : 'Дякуємо!'}
              </StyledFeedbackTitle>
              <StyledFeedbackText>
                {isError ? null : 'Ваша заявка прийнята.'}
              </StyledFeedbackText>
              {isError ? null : <p>Очікуйте відповідь.</p>}
            </>
          )}
        </StyledFeedbackContent>
        <StyledButtonClose onClick={onFeedbackClose}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <use href={SpriteSvg + '#close-r'} />
          </svg>
        </StyledButtonClose>
      </StyledFeedback>
    </StyledWrapperFeedback>
  );
}
