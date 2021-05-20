import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem 3rem;
  gap: 1rem;

  background: var(--blue);

  div.navSection {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 0 2.25rem;
    align-self: stretch;

    nav.main {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      padding: 0;

      align-self: stretch;
      flex-grow: 1;
      gap: 6.875rem;

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-grow: 0;
        gap: 2.75rem;
      }
    }
    nav.social ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }

  div.rights {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    div.left {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.25rem;
    }
  }
`;
