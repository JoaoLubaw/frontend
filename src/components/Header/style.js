import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderContainer = styled.header`
  background-color: ${colors.grey};
  position: fixed;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 90vw;
  padding: 8px;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  z-index: 10;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 48px;
  }

  .links {
    display: flex;
    height: 100%;
    content-align: center;
    text-align: center;
    gap: 12px;

    a {
      font-weight: bold;
      font-size: 16px;
      text-decoration: none;
      color: ${colors.black};
    }

    .active {
      font-weight: bold;
      background: linear-gradient(
        to right,
        red,
        orange,
        yellow,
        green,
        blue,
        indigo,
        violet
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent; /* Isso permite que o gradiente apareça */
      -webkit-text-stroke: 0.3px black; /* Adiciona um contorno ao redor do texto */
    }

    .links a.active:hover {
      opacity: 0.8; /* Efeito de hover para o link ativo */
    }
  }

  &.hidden {
    transform: translateY(-100%);
    opacity: 0; /* Torna o cabeçalho invisível */
  }

  &.visible {
    transform: translateY(0); /* Reseta a posição do cabeçalho */
    opacity: 1; /* Torna o cabeçalho visível */
  }
`;
