import styled from "styled-components";

export const AreaCadastro = styled.div`
    body{
    background: rgb(39,174,96);
    background: linear-gradient(90deg, rgba(39,174,96,1) 20%, rgba(46,204,113,1) 56%, rgba(26,188,156,1) 100%);
    background-repeat: no-repeat;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    
    main.container{
    background: white;
    max-width: 350px;
    min-height: 40vh;
    padding: 2rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    }

    main h2 {
    font-weight: 600;
    margin-bottom: 2rem;
    position: relative;
    }
    main h2::before {
    content: "";
    position: absolute;
    height: 4px;
    width: 25px;
    bottom: 3px;
    left: 0;
    border-radius: 10px;
    background: rgb(39,174,96);
    background: linear-gradient(90deg, rgba(39,174,96,1) 20%, rgba(46,204,113,1) 56%, rgba(26,188,156,1) 100%);
    }
    
    form{
    display: flex;
    flex-direction: column;
    }
    
    .input-field{
    position: relative;
    }
    
    form .input-field :first-child{
    margin-bottom: 1.5rem;
    }
    
    .input-field input{
    outline: none;
    font-size: 0.9rem;
    color: (0,0,0, 0.7);
    }
    
    .input-field input::placeholder{
    color: (0,0,0, 0.5);
    }

    .form input[type="submit"]{
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.4rem;
    background: linear-gradient(to left, rgba(39,174,96,1), rgba(46,204,113,1), rgba(26,188,156,1));
    cursor: pointer;
    color: white;
    font-size: 0.9rem;
    font-weight: 300;
    border-radius: 4px;
    transition: all 0.3s ease;
    }

    form input[type="submit"]:hover{
    letter-spacing: 0.5px;
    background:linear-gradient(to right, rgba(39,174,96,1), rgba(46,204,113,1), rgba(26,188,156,1));
}
`