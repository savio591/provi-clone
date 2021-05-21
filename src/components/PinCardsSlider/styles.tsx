import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  margin: 1rem 4rem;
  border-radius: 1.25rem;
  gap: 2rem;

  background: #ffffff;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.12);

  nav.cardNavigator {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;
