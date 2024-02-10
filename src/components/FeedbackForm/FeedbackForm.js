import {
  FeedbackFormStyled,
  TextContentWrapper,
  FormText,
  FormInput,
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
        <FormInput type="tel"></FormInput>
      </label>
      <FormButton type="submit">Відправити</FormButton>
    </FeedbackFormStyled>
  );
};
