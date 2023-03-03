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
        --primary:      #007BFF;
        --secondary:    #6C757D;
        --succes:       #28A745;
        --error:        #DC3545;
        --warning:      #FFC107;
        --info:         #17A2B8;
        --white:        #fff;
        --link:         #5d80d6;
        --input-color: black; 
        --input-border: #CDD9ED;
        --input-background: #fff;
        --input-placeholder: #CBD1DC;
        --input-border-focus: #275EFE;
        --group-color: var(--input-color);
        --group-border: var(--input-border);
        --group-background: #EEF4FF;
        --group-color-focus: #fff;
        --group-border-focus: var(--input-border-focus);
        --group-background-focus: #678EFE;
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
`;