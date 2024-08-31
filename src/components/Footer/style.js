import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const FooterContainer = styled.footer`
  background-color: ${colors.grey};
  width: 90vw;
  padding: 8px;
  text-align: center;
  bottom: 0;
  left: 0;

  &.relative {
    position: relative;
  }

  &.absolute {
    position: absolute;
    bottom: 0;
  }

  a,
  span {
    color: ${colors.black};
    font-size: 16px;
    text-decoration: none;
  }
  img {
    height: 16px;
  }

  img,
  a {
    margin: 0 4px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    img {
      height: 12px;
    }
    a,
    span {
      font-size: 12px;
    }
  }
`;
