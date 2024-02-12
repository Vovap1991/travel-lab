import styled from 'styled-components';

export const FeedbackFormStyled = styled.form`
  height: 150px;
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
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const FormTitle = styled.h3`
  font-size: 40px;
  line-height: 1.43;
`;

export const FormText = styled.p`
  font-size: 15px;
  line-height: 1.43;
  width: 500px;
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
  width: 200px;
  cursor: pointer;
  height: 60px;
`;
