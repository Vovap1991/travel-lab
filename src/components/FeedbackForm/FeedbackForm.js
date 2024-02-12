import {
  FeedbackFormStyled,
  TextContentWrapper,
  FormText,
  InputButtonWrapper,
  FormInput,
  FormTitle,
} from './FeedbackForm.styled';

import { PrimaryButton } from 'components/StyledComponents/PrimaryButton';

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
        <PrimaryButton type="submit">Відправити</PrimaryButton>
      </InputButtonWrapper>
    </FeedbackFormStyled>
  );
};
