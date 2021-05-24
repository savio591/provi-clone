import styled from "styled-components";

export const Container = styled.header`
  z-index: 1;
  width: 100vw;
  height: 5.625rem;
  display: flex;
  background: transparent;
  padding: 1.5rem 2.5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  transition: background 0.3s;

  button.burguer {
    display: none;

    @media (max-width: 1115px) {
      display: initial;

      &.scrolled {
      }
    }
  }

  &.scrolled {
    background: white;
    box-shadow: 0px 5px 8px -3px rgba(171, 171, 171, 0.4);
  }

  img {
    &:hover {
      opacity: 0.7;
    }
  }
`;

interface NavProps {
  isActive?: boolean;
}

export const Nav = styled.nav<NavProps>`
  @media (max-width: 1115px) {
    position: absolute;
    display: ${(props) => (props.isActive ? "flex" : "none")};
    background: transparent;
    flex-direction: column;
    align-items: flex-start;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    z-index: -1;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;

  list-style: none;
  line-height: 0;

  gap: 2.5rem;

  &.scrolled a {
    color: #cdcdcd;
  }

  @media (max-width: 1115px) {
    min-height: 640px;
  }

  a {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-family: "Century Gothic";
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 1115px) {
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
  }

  a.login {
    color: red;
    text-decoration: underline;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 1115px) {
    background: var(--blue);
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 2.5rem;
  }
`;

interface ButtonProps {
  icon?: string;
}

export const Button = styled.button<ButtonProps>`
  width: 16rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.875rem 0.5rem;

  background: var(--magenta);

  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 2rem;
  gap: 0.75rem;
  transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background: var(--magenta_dark);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.12),
      0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  }

  span {
    font-style: normal;
    font-weight: bold;
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.02857em;

    flex-grow: 0;

    color: white;
  }

  &:after {
    content: url("${(props) => props.icon}");
    line-height: 0;
  }

  @media (max-width: 1115px) {
    display: none;
  }
`;
