import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --magenta: #DE0C4B;
    --magenta_dark: #A40024;
    --blue: #000B3C;
    --grey: #E5E5E5;
    --grey_bar: #DDDDDD;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%
    }

    @media (max-width: 720px) {
        font-size: 87.5%
    }
}


body {
    background: var(--shape);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
     text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
    width: 100%;
    height: 100%;
}

body, input, textarea, button {
	font-family: 'Century Gothic', sans-serif;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: normal;
}

button {
    cursor: pointer;
}

img {
  display: block;
}

[disabled] {
    opacity: 0.6;
    cursor: default
}

.react-modal-overlay {
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.react-modal-content {
  width: 100%;
  height: 100vh;
  max-height: 720px;
  
  background: transparent;
  padding: 0;
  border-radius: 0.25rem;
  position: relative;
}

.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8)
  }
}

`;
