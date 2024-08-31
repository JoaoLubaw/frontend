import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  desktop4K: "2559",
  desktopG: "1439px",
  desktop: "1024px",
  tablet: "768px",
  mobileG: "426px",
  mobile: "375px",
};

export const colors = {
  black: "#000000",
  greyDark: "#201e1f",
  white: "#FFFFFF",
  grey: "#D9D9D9",
};

export const GlobalCss = createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
  color: ${colors.white};
  list-style: none;
	font-family: "Roboto", sans-serif;
}

.container {
margin: 0 5%;
justify-content: center;
}

body {
background-color: ${colors.greyDark};
}

/* Estilizando a scrollbar */
::-webkit-scrollbar {
  width: 8px; /* Largura da scrollbar */
	z-index: 3;
}

::-webkit-scrollbar-track {
  background: #e30304; /* Cor do fundo da track */
}

::-webkit-scrollbar-thumb {
  background: #b50001; /* Cor do polegar */
  border-radius: 4px; /* Arredondamento do polegar */
}

::-webkit-scrollbar-thumb:hover {
  background: #830102; /* Cor do polegar ao passar o mouse */
}
`;
