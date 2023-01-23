import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        
        height: 100%;
        width: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    ul {
        list-style: none;
    }

    html {
        background: #eee;
    }

    :root {
        --primary:      #007BFF,

        --secondary:    #6C757D,

        --succes:       #28A745,

        --danger:       #DC3545,

        --warning:      #FFC107,

        --info:         #17A2B8,

        --white:        #fff,

        --link:         #5d80d6,
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 1500px;
        background: #eee;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        display: block;
        position: 2px;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;