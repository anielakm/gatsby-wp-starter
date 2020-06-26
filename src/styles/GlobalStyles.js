import { createGlobalStyle } from 'styled-components'
import { theme } from "../utilis/theme"

const GlobalStyle = createGlobalStyle`

  body {
	margin:0;
	font-family: ${theme.fonts.lato};
		color: ${theme.colors.grayDark};
	
  }
  
  a {
	  text-decoration: none;
	  font-weight: bold;
  }

  *, *::before, *::after{
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
      outline: none;
  }

  
  ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }

  img {
	  max-width: 100%;
	  height: auto;
  }


`
export default GlobalStyle;