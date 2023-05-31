import styled from "styled-components";

export const AreaAbout = styled.div`
    .max-width{
        max-width: 1300px;
        padding: 0 80px;
        margin: auto;
    }
    section{
        padding: 100px 0;
    }
    section .title{
        font-family: 'Ubuntu', sans-serif;
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 60px;
        padding-bottom: 20px;
        position: relative;
    }
    section .title::before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 180px;
        height: 3px;
        background: #111;
        transform: translateX(-50%);
    }
    section .title::after{
        position: absolute;
        bottom:-12px;
        left: 50%;
        font-size: 20px;
        background: #fff;
        color: black;
        padding: 5px;
        transform: translateX(-50%);
    }
    .about{
        font-family: 'Roboto', sans-serif;
    }
    .about .about-content{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
    .about .about-content .left{
        width: 45%;
    }
    .about .about-content .right{
        width: 55%;
    }
    .about .about-content .right .text{
        font-size: 50px;
        font-weight: 500;
        margin-bottom: 10px;
    }
    .about .about-content .right p{
        text-align: justify;
        font-size: 20px;
    }
    .about .about-content .right a{
        display: inline-block;
        background: #2980b9;
        color: black;
        font-size: 20px;
        font-weight: 500;
        padding: 10px 30px;
        margin-top: 20px;
        border-radius: 6px;
        border: 2px solid #000000;
        transition: all 0.3s ease;
    }
    .about .about-content .right a:hover{
        color: #FFFF00;
        background: black;
    }
    .about .about-content .left img{
        width: 450px;
        height: 400px;
        object-fit: cover;
        border-radius: 6px;
    }
    @media (max-width: 1300px){
        .max-width{
            margin-left: 0;
    }
}
    @media (max-width: 1104px){
        .about .about-content .left img{
            width: 350px;
            height: 350px;
    }
}
    @media (max-width: 947px){
    .max-width{
        max-width: 800px;
        padding: 0 50px;
    }
    .about .about-content .column{
        width: 50%;
    }
    .about .about-content .left{
        display: flex;
        justify-content: center;
        margin: 0 auto 60px;
    }
    .about .about-content .right{
        flex: 100%;
    }
}
`