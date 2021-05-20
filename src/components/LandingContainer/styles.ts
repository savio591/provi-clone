import styled from "styled-components";
import landing1BgImg from "../../assets/bg_landing1.png";
import ld6BgImg from "../../assets/ld6Bg.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div.landing1 {
    min-height: 100vh;
    background-image: url(${landing1BgImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 2rem;
    align-items: flex-start;
    justify-content: center;

    padding: 1.625rem 2.25rem;

    & h1 {
      max-width: 33.5rem;
    }
  }

  div.landing2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 6.8125rem;

    padding: 0 2.75rem;

    background: var(--grey_bar);

    & ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-grow: 1;
      align-items: center;
      list-style: none;
    }
  }

  div.landing3 {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    padding: 20px 36px;

    & img {
      height: 48rem;
      margin-left: 2rem;
    }

    & div.container {
      max-width: 35rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1.5rem;

      & section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 3rem;
      }
    }
  }

  div.landing4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem 4rem;
    gap: 2rem;

    background: var(--blue);

    & h1 {
      text-align: center;
      max-width: 64rem;
    }

    & div.rows {
      & ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;
        padding: 20px 50px 50px;

        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
        gap: 50px 50px;

        & li {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          gap: 100px;
          flex-grow: 1;

          & p {
            max-width: 20rem;
            text-align: center;
          }
        }
      }
    }
  }

  div.landing5 {
    min-height: 100vh;
    background: var(--grey);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;

    & h1 {
      max-width: 80rem;
    }

    & ul.row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 4rem 2rem;
      align-items: baseline;

      & li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;

        flex-grow: 1;
        & img {
          width: 12rem;
        }

        & p {
          max-width: 81%;
        }
      }
    }
  }

  div.landing6 {
    background: #ffffff;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 3rem 0;

    gap: 2rem;
  }

  div.landing7 {
    display: flex;
    flex-direction: column;
    background: url(${ld6BgImg}) right bottom / 60% no-repeat rgb(255, 255, 255);
    width: 100%;
    min-height: 100vh;

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 3rem;
      flex-grow: 1;
      gap: 2rem;
      max-width: 42rem;

      & p {
        margin-top: 1.25rem;
      }
    }
  }

  
`;

interface ButtonProps {
  icon: string;
  textSize?: "big";
  buttonSize?: "default" | "big";
}

const textSize = {
  big: { fontSize: "1.25rem", lineHeight: "1.5rem" },
  default: { fontSize: "1rem", lineHeight: "1.25rem" },
};

const buttonSize = {
  default: { width: "16rem", padding: "0.875rem 0.5rem" },
  big: { width: "18rem", padding: "1rem 1rem" },
};

export const Button = styled.button<ButtonProps>`
  min-width: ${(props) =>
    props.buttonSize
      ? buttonSize[props.buttonSize].width
      : buttonSize.default.width};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${(props) =>
    props.buttonSize
      ? buttonSize[props.buttonSize].padding
      : buttonSize.default.padding};

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
    font-size: ${(props) =>
      props.textSize
        ? textSize[props.textSize].fontSize
        : textSize.default.fontSize};
    line-height: ${(props) =>
      props.textSize
        ? textSize[props.textSize].lineHeight
        : textSize.default.lineHeight};
    letter-spacing: 0.02857em;
    width: fit-content;

    flex-grow: 0;

    color: white;
  }

  &:after {
    content: url("${(props) => props.icon}");
    line-height: 0;
  }
`;

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
