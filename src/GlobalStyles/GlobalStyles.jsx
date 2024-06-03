import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        line-height: 1.5;
        font-family: "Josefin Sans", sans-serif;
    }

    html, body, h1, h2, h3, h4, h5, h6, p {
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

        --bright-blue: "hsl(220, 98%, 61%)";
        --gradient: "linear-gradient(180deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))";

        --very-light-gray: 'hsl(0, 0%, 98%)';
        --very-light-grayish-blue: 'hsl(236, 33%, 92%)';
        --light-grayish-blue: 'hsl(233, 11%, 84%)';
        --dark-grayish-blue: 'hsl(236, 9%, 61%)';
        --very-dark-grayish-blue: 'hsl(235, 19%, 35%)';

        --very-dark-blue: 'hsl(235, 21%, 11%)';
        --very-dark-desaturated-blue:'hsl(235, 24%, 19%)';
        --light-grayish-blue: 'hsl(234, 39%, 85%)';
        --light-grayish-blu-hover: 'hsl(236, 33%, 92%)';
        --dark-grayish-blue: 'hsl(234, 11%, 52%)';
        --very-dark-grayish-blue: 'hsl(233, 14%, 35%)';
        --very-dark-grayish-blue: 'hsl(237, 14%, 26%)';
     }

    ol, ul {
	list-style: none;
}

`;

export default GlobalStyles;
