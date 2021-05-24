import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  div.cards {
    display: flex;
    align-items: center;

    & div.item {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;
