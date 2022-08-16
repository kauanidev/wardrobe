import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}

body {
  color: ${(props) => props.theme.primary};
  background-image: url("https://www.transparenttextures.com/patterns/fabric-of-squares.png");
}

html {
  scroll-behavior: smooth;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}
`;

export const BaseContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;
