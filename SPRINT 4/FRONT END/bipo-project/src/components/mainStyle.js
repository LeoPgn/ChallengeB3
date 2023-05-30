import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    corFundo: '#FFFF00',
    corTexto: '#000000',
}

export const darkTheme = {
    corFundo: '#000000',
    corTexto: '#FFFF00',
}

export const GlobalStyles = createGlobalStyle `
    body {
        background-color: ${props => props.theme.corFundo};
    }
    p{
        color: ${props => props.theme.corTexto};
    }
    container{
        color: ${props => props.theme.corTexto};
    }
    h2 {
        color: ${props => props.theme.corTexto};
    }
    h3 {
        color: ${props => props.theme.corTexto};
    }
`

export const ContainerPage = styled.div`
    padding: 1% 2%;
    color: ${props => props.theme.corTexto};
`

export const TitlePage = styled.h1 `
    color: ${props => props.theme.corTexto};
    font-size: 20px;
`