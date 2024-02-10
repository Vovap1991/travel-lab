import {
  FeedbackFormStyled,
  TextContentWrapper,
  FormText,
} from './FeedbackForm.styled';

export const FeedbackForm = () => {
  return (
    <FeedbackFormStyled>
      <TextContentWrapper>
        <h2>Підібрати Вам тур?</h2>
        <FormText>
          Залиште Ваш телефон і наш менеджер зв'яжеться з Вами, щоб уточнити
          деталі та надіслати пропозиції
        </FormText>
      </TextContentWrapper>
      <label>
        <input type="tel"></input>
      </label>
      <button type="submit">Відправити</button>
    </FeedbackFormStyled>
  );
};
