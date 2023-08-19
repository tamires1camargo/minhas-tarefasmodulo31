import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color:#ecf0f1;

  }

`
export const Button = styled.button`
  background-color: #38ada9;
  color: #fff;
  font-weight: bold;
  padding: 8px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-right: 8px;

  :hover {
    opacity: 0.8;
  }
`

export default GlobalStyle
