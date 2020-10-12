import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        font-weight: 300;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Quicksand', sans-serif;
    }

    h1, h2 {
        margin: 40px 0;
    }

    h4 {
        margin: 24px 0;
    }

    h5, h6 {
        margin: 8px 0;
    }

    img {
        width: 100%
    }

    a {
        color: inherit;
        text-transform: none;
    }

    button, a {
        cursor: pointer
    }

    input, button {
        padding: 8px 16px;
        border-radius: 4px;
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25)
    }

`