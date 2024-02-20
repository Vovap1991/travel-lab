import {
  FeedbackFormStyled,
  TextContentWrapper,
  FormText,
  InputButtonWrapper,
  FormInput,
  FormTitle,
  FormButton,
} from './FeedbackForm.styled';

export const FeedbackForm = () => {
  return (
    <FeedbackFormStyled>
      <TextContentWrapper>
        <FormTitle>Підібрати Вам тур?</FormTitle>
        <FormText>
          Залиште Ваш телефон і наш менеджер зв'яжеться з Вами
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
