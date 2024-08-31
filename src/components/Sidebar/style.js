import styled from "styled-components";

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: fixed;
  z-index: -1;

  .c1 {
    width: 16.66%;
    background-color: #e30304;
  }
  .c2 {
    width: 16.66%;
    background-color: #ff8b00;
  }
  .c3 {
    width: 16.66%;
    background-color: #feed01;
  }
  .c4 {
    width: 16.66%;
    background-color: #79b82b;
  }
  .c5 {
    width: 16.66%;
    background-color: #014aff;
  }
  .c6 {
    width: 16.66%;
    background-color: #a9518c;
  }
`;

export const Left = styled.aside`
  width: 5%;
  display: flex;
`;

export const Right = styled.aside`
  width: 5%;
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
`;
