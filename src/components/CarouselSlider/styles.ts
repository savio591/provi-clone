import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  div.cards {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & div.item {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;
