import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';

type GlobalStylesProps = {
  //
};

const GlobalStyles: GlobalStyleComponent<GlobalStylesProps, DefaultTheme> = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
  }
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 65px;
  }
  body {
    font-family: "Montserrat", sans-serif;
  }
`;

export default GlobalStyles;
