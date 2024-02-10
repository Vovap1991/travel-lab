import {
  FeedbackFormStyled,
  TextContentWrapper,
  FormText,
  InputButtonWrapper,
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
      <InputButtonWrapper>
        <label>
          <FormInput type="tel" placeholder="+380"></FormInput>
        </label>
        <FormButton type="submit">Відправити</FormButton>
      </InputButtonWrapper>
    </FeedbackFormStyled>
  );
};
