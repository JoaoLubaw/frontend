import styled from "styled-components";
import { breakpoints } from "../../styles";

export const HomeContainer = styled.div`
  h1 {
    text-align: center;
    font-size: 48px;
    padding: 24px;

    @media (max-width: ${breakpoints.mobileG}) {
      font-size: 10vw;
      padding-top: 10%;
      padding-bottom: 0;
    }
  }

  .hero {
    height: 100vh;
    display: flex; /* Alinha itens horizontal e verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    text-align: center;

    img {
      width: 40vw;
    }

    @media (max-width: ${breakpoints.mobileG}) {
      img {
        width: 70vw;
      }
    }
  }

  .About {
    min-height: 100vh;

    .division {
      padding: 24px;
      display: flex;
      justify-content: space-between;

      img {
        width: 45%;
        height: 280px;
        border-radius: 2%;
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
      }

      p {
        max-width: 50%;
        font-size: 16px;
      }

      @media (max-width: ${breakpoints.mobileG}) {
        flex-direction: column;
        align-items: center;
        padding: 8px 24px;

        img {
          width: 100%;
          margin: 8px;
        }

        p {
          max-width: 100%;
          font-size: 14px;
        }
      }

      @media (max-width: ${breakpoints.mobile}) {
        p {
          font-size: 12px;
        }
      }
    }

    .fullW {
      padding: 24px;
      width: 100%;
      max-height: 40vh;
      object-fit: cover;
      border-radius: 4%;

      @media (max-width: ${breakpoints.mobileG}) {
        padding: 8px 24px;
        max-height: 18vh;
      }
    }

    .WhatWeDo {
      padding: 24px;
    }
  }
`;
