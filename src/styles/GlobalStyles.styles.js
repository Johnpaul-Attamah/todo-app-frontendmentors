import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary-bg: hsl(235, 21%, 11%);
        --colo-secondary-bg: hsl(0, 0%, 98%);
        --color-main-text: hsl(290, 60%, 98%);
        --color-input-text-label: hsl(237, 14%, 55%);
        --color-input-text: hsl(234, 39%, 85%);
        --color-primary-dark-bg: hsl(235, 24%, 19%);
        --dark-shadow: -10px 10px 50px rgb(0 0 0 / 10%);
    }

    ::placeholder {
        color: var(--color-input-text-label);
        font-size: 1.5rem;
        font-weight: 700;
    }

    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 50%;
        font-family: 'Josefin Sans', sans-serif;

        @media screen and (min-width: 750px) {
            font-size: 62.5%;
        }
    }

    body {
        background-color: ${(props) => props.theme.bgColor}
    }
`;