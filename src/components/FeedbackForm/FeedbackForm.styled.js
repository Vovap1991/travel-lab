import styled from 'styled-components';

export const FeedbackFormStyled = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.48);
  border-radius: 25px;
  width: 900px;
`;

export const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormText = styled.p`
  width: 350px;
`;

export const InputButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const FormInput = styled.input`
  outline: none;
  padding: 10px;
  border-radius: 25px;
  width: 180px;
  cursor: pointer;
`;
