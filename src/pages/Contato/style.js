import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const ContatoContainer = styled.div`
  text-align: center;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-between;
      background-color: ${colors.grey};
      padding: 8px;
      border-radius: 8px;
      border: none;
      max-width: 70%;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;
      text-decoration: none;

      span {
        font-size: 20px;
        max-width: 460px;
        font-weight: bold;
        color: ${colors.black};
      }

      img {
        max-height: 81px;
      }

      &:hover {
        transform: scale(1.1);
      }

      @media (max-width: ${breakpoints.mobileG}) {
        flex-direction: column;
        max-width: 90%;

        span {
          padding: 4px;
          font-size: 4vw;
        }

        img {
          max-height: 6vh;
        }
      }
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

  .SocialMedias {
    margin-top: 35vh;
    margin-bottom: 5vh;

    @media (max-width: ${breakpoints.mobileG}) {
      margin-top: 2vh;
      margin-bottom: 2vh;
      h2 {
        font-size: 6vw;
        padding-bottom: 6px;
      }
    }

    @media (min-width: 430px) and (max-width: ${breakpoints.tablet}) {
      margin-top: 30vh;
    }

    h2 {
      padding: 24px;
    }

    .links {
      display: flex;
      justify-content: space-around;

      a {
        display: flex;
        text-align: center;
        align-items: center;
        transition: transform 0.3s ease-in-out;

        img {
          height: 80px;
          width: 80px;
        }

        &:hover {
          transform: scale(1.1);
        }
      }

      @media (max-width: ${breakpoints.mobileG}) {
        align-items: center;
        flex-direction: column;

        a {
          padding: 8px;

          img {
            max-height: 8vh;
          }
        }
      }
    }
  }
`;
