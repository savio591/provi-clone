import styled from "styled-components";
import burguerIconImg from "../../assets/burguer.svg";

export const Container = styled.header`
  width: 100%;
  height: 5.625rem;
  display: flex;
  background: transparent;
  padding: 1.5rem 2.5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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

export const BurguerStyle = styled.button`
  border: none;
  background: transparent;
  display: none;

  @media (max-width: 1115px) {
    display: initial;
  }
`;

interface NavProps {
  isActive?: boolean;
}

export const Nav = styled.nav<NavProps>`
  &.modal {
    display: ${(props) => (props.isActive ? "inherit" : "none")};
  }

  @media (max-width: 1115px) {
    position: absolute;
    display: flex;
    background: red;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
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
    align-items: center;
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
`;
