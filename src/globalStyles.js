import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    /* FONT */
    --outfit-font: 'Outfit', sans-serif;
    --roboto-font: 'Roboto Mono', monospace;
    --montserrat-font: 'Montserrat', sans-serif;
    /* COLOR */
    --white-color: #FFF;
    --black-color: #000;
    --dark-bg: #1E1E1E;
    --blue1-color: #4B59F7;
    --blue2-color: #2839f3;
    --dark-back: #101522;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    list-style-type: none;
    outline: none;
    border: none;
}
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Contain = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
`;

export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB') };
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px' ) };
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: ${({butIf}) => (butIf ? 'none' : '')};
    
    &:hover{
        transition: all .3s ease-out;
        background: #FFF;
        color: ${({primary}) => (primary ? '#0467FB' : '#4B59F7') };
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`;

export default GlobalStyle;