import styled from "styled-components";
import { breakpoints } from "../../styles";

export const AjudeContainer = styled.div`
  text-align: center;

  .pix {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    .chave {
      display: flex;
      align-items: center;

      @media (max-width: ${breakpoints.tablet}) {
        margin-top: 8px;
        max-width: 80%;
        flex-direction: column;
      }

      button {
        background: none;
        border: none;
        cursor: pointer;

        img {
          max-width: 20px;

          @media (max-width: ${breakpoints.tablet}) {
            max-width: 32px;
          }
        }
      }
    }

    img {
      max-width: 30%;

      @media (max-width: ${breakpoints.tablet}) {
        max-width: 50%;
      }
    }

    span {
      padding: 8px;
      font-size: 16px;
    }
  }

  h1 {
    font-size: 48px;
    padding-top: 88px;
    padding-bottom: 24px;

    @media (max-width: ${breakpoints.mobileG}) {
      font-size: 8vw;
    }
  }

  .text {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 24px;

    @media (max-width: ${breakpoints.mobileG}) {
      padding: 48px;

      p {
        max-width: 100%;
      }
    }
  }

  p {
    max-width: 80%; /* Define uma largura máxima para o parágrafo */
  }
`;
