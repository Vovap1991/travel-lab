import {
  FeedbackFormStyled,
  TextContentWrapper,
  FormText,
  FormButton,
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
      <FormButton type="submit">Відправити</FormButton>
    </FeedbackFormStyled>
  );
};
