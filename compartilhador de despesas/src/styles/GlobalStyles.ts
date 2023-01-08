import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    html, body, #root {
        max-width: 100vh;
        max-height: 100vh;

        height: 100%;
        width: 1005;
    };

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    };

    ul {
        list-style: none;
    };

    html {
        background: #eee;
    };

    :root {
        --primary:      #007BFF,

        --secondary:    #6C757D,

        --succes:       #28A745,

        --danger:       #DC3545,

        --warning:      #FFC107,

        --info:         #17A2B8,

        --white:        #fff,

        --link:         #5d80d6,
    };
`;