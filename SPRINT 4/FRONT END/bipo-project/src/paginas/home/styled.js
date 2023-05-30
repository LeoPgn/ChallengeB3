import styled from "styled-components";

const bannerGrande = require('../../imagens/bannerGrande_homepage.jpg');
const bannerMobile = require('../../imagens/bannerMobile_homepage.jpg');
export const AreaHome = styled.div `
    .max-width{
        max-width: 1300px;
        padding: 0 80px;
        margin: auto;
    }
    .home{
        display: flex;
        background: url(${bannerGrande}) no-repeat;
        background-size: cover;
        height: 100vh;
        color: rgb(8, 0, 0);
        min-height: 500px;
        font-family: 'Ubuntu', sans-serif;

        @media screen and (max-width: 768px){
            display: flex;
            background: url(${bannerMobile}) no-repeat;
            background-size: cover;
            height: 100vh;
            color: rgb(8, 0, 0);
            min-height: 500px;
            font-family: 'Ubuntu', sans-serif;
        }
    }
    .home .max-width{
        margin: auto 0 auto 40px;
    }
    .home .home-content .text-1{
        font-size: 27px;
        color: #f1c40f;
    }
    .home .home-content .text-2{
        font-size: 75px;
        font-weight: 500;
        margin-left: -3px;
        color: #f1c40f;
    }
    .home .home-content .text-3{
        font-size: 40px;
        margin: 5px 0;
        color: #f1c40f;
    }
    .home .home-content .text-3 span{
        color: #fff;
        font-weight: 500;
    }
`