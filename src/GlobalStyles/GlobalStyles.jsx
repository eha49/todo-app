import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        line-height: 1.5;
        font-family: "Josefin Sans", sans-serif;
    }

    html, body, h1, h2, h3, h4, h5, h6, p, ol, li {
        margin: 0;
        padding: 0;
        border: 0;
    }

    html, body {
        height: 100%;
    }

    html {
        --weight-regular: 400;
        --weight-bold: 700;

        --bright-blue:  hsl(220deg, 98%, 61%);
        --gradient:  linear-gradient(180deg, hsl(192deg, 100%, 67%), hsl(280deg, 87%, 65%));

        --very-light-gray: hsl(0deg, 0%, 98%);
        --very-light-grayish-blue: hsl(236deg, 33%, 92%);
        --light-grayish-blue: hsl(233deg, 11%, 84%);
        --dark-grayish-blue: hsl(236deg, 9%, 61%);
        --very-dark-grayish-blue: hsl(235deg, 19%, 35%);

        --very-dark-blue: hsl(235deg, 21%, 11%);
        --very-dark-desaturated-blue: hsl(235deg, 24%, 19%);
        --light-grayish-blue: hsl(234deg, 39%, 85%);
        --light-grayish-blue-hover: hsl(236deg, 33%, 92%);
        --dark-grayish-blue: hsl(234deg, 11%, 52%);
        --very-dark-grayish-blue: hsl(233deg, 14%, 35%);
        --very-dark-grayish-blue-hover: hsl(237deg, 14%, 26%);
     }

     body {
        background-color: var(--very-dark-blue);
     }

    ol, ul {
	list-style: none;
}

`;

export default GlobalStyles;
