import styled from "styled-components"

const ButtonWrapper = styled.section`
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  border-radius: 20px;
  background-color: ${({ primary }) => (primary ? "#E38B06" : "#000")};
  color: ${({ primary }) => (primary ? "#000" : "#fff")};
  padding: 18px 30px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: transform 0.2s ease;
  &:hover {
    background-color: ${({ primary }) => (primary ? "#fff" : "#E38B06")};
    transform: translateY(-0.5rem) scale(1.02);
    color: #000;
  }
`
