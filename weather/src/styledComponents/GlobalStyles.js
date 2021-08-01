import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #1b1b1b;
  }
  h1, h2, h3, p {
    color: gainsboro;
  }
  .track {
    background: lightblue;
    border-radius: 1rem;
    margin-top: 1.045rem;
    height: 1rem;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .animate-track {
    background: rgb(204, 204, 204);
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateX(0%);
    pointer-events: none;
  }
  @keyframes rain {
    from {
      transform: translateY(-15000%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes heavy-rain {
    from {
      transform: translateY(-15000%);
    }
    to {
      transform: translateY(0);
    }
  }
  .storm {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    animation: flash 5s linear infinite;
    pointer-events: none;
  }

  @keyframes flash {
    0%, 95%, 98% {
      background-color: transparent
    }
    96%, 99%, 100% {
      background-color: #fff
    }
  }

`;