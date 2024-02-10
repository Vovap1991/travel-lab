import styled from 'styled-components';

export const FeedbackFormStyled = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.48);
  border-radius: 25px;
`;

export const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormText = styled.p`
  width: 350px;
`;

export const FormInput = styled.input`
  outline: none;
  padding: 10px;
  border-radius: 25px;
  width: 180px;
  cursor: pointer;
`;

export const FormButton = styled.button`
  background-color: var(--grey-gold);
  padding: 10px;
  border-radius: 25px;
  width: 140px;
`;
