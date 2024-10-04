import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 40px;
  margin-left: 80px;
`;

export const Input = styled.input`
  width: 295px;
  padding: 10px;
  border-radius: 25px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:focus {
    border-color: #007bef;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const Button = styled.button`
  //   width: 113px;
  //   height: 52px;
  //   border: 1px solid #ccc;
  //   background-color: #570304;
  //   color: white;
  //   cursor: pointer;
  //   box-sizing: border-box;
  //   transition: background-color 0.2s;
  position: absolute;
  //   //   right: 0;
  //   //   top: 0;
  //   border-top-left-radius: 24px;
  //   border-bottom-left-radius: 45px;
  //   border-top-right-radius: 45px;
  //   border-bottom-right-radius: 24px;

  //   &:hover {
  //     background-color: darkgrey;
  //   }
  padding: 10px;
  border-radius: 25px;
  background-color: inherit;
  color: white;
  border: none;
  margin-left: -35px;
`;
