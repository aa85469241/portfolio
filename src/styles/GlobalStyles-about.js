import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const AboutGlobalStyles = createGlobalStyle`
    ${normalize}

    :root {
        --clr-black: #000000;
        --clr-white: #FFFFFF;
        --clr-red: #EF4A4A;
        --clr-brown: #EFD0A2;
        --clr-bg-light: #f4f1ec;
        --clr-bg-dark: #4a4a4a;

        --font-family-body: 'Fira Sans', sans-serif;
        --font-family-main: 'Changa', sans-serif;

        --step-header-logo: clamp(0.94rem, calc(0.58rem + 1.38vw), 1.88rem);
    }

    *,
    ::before, 
    ::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        cursor: none;
    }

    html {
        font-size: 16px;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
    }

    body {
        font-family: var(--font-family-body);
        background-color: var(--clr-bg-dark);
        color: var(--clr-white);
        line-height: 1.5;
        user-select: none;
    }
`