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

  &.rotate180 {
    transform: rotate(180deg);
  }
}

button.clean {
  border: none;
  background: transparent;
}


[disabled] {
    opacity: 0.6;
    cursor: default
}

h1.text60 {
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 74px;

  color: #FFFFFF;
}

h1.text48 {
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 60px;

  color: #FFFFFF;
}

h1.text38, h2.text38 {
  font-size: 38px;
  line-height: 47px;

  color: #FFFFFF;
}

h1.text30 {
  font-size: 30px;
line-height: 36px;

color: #ffffff
}

h2.text24, p.text24 {
font-size: 1.5rem;
line-height: 30px;

color: #FFFFFF;
}

p.text24_38 {
  font-size: 1.5rem;
line-height: 38px;

color: #FFFFFF;
}


span {
    font-weight: bold;
  }

p.text20 {
font-size: 20px;
line-height: 25px;
text-align: center;

color: #FFFFFF;

}

a.textLink16 {
font-style: normal;
font-weight: bold;
font-size: 1rem;
line-height: 1.25rem;
display: flex;
align-items: center;
text-decoration-line: underline;

color: #FFFFFF;
}

h1.blue, h2.blue, h3.blue, p.blue, a.blue {
  color: var(--blue);
}

h1.magenta, h2.magenta, h3.magenta, p.magenta, a.magenta {
  color: var(--magenta);
}

h1.center, p.center, h2.center {
  text-align: center;
}

h1.left, h2.left, p.left{
  text-align: left;
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


.keen-slider {
  display: flex;
  overflow: hidden;
  position: relative;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;

  &__slide {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 100%;
  }

  &[data-keen-slider-v] {
    flex-wrap: wrap;
  }

  &[data-keen-slider-v] &__slide {
    width: 100%;
  }

  &[data-keen-slider-moves] * {
    pointer-events: none;
  }
}


`;
