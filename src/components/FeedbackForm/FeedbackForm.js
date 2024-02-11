import {
  FeedbackFormStyled,
  TextContentWrapper,
  FormText,
  InputButtonWrapper,
  FormInput,
} from './FeedbackForm.styled';

import { PrimaryButton } from 'components/StyledComponents/PrimaryButton';

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
        <PrimaryButton type="submit">Відправити</PrimaryButton>
      </InputButtonWrapper>
    </FeedbackFormStyled>
  );
};
