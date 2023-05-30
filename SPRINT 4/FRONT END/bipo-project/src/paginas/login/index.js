import React, {useState} from 'react'
import '../../App.css';
import { AreaLogin } from './styled';
import {FormGroup, Label, Input, Button, Alert } from 'reactstrap' 

const Login = () => {
    const [showAlert, setShowAlert] = useState(false);  
    const handleClick = () => {setShowAlert(true);}
  return (
    <>
    <AreaLogin>
    <body>
      <main class="container">
          <h2>Faça Login</h2>
          <form id="">
            <FormGroup>
              <Label for="exampleEmail"></Label>
              <Input id="exampleEmail" name="email" placeholder="E-mail" type="email" required/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword"></Label>
              <Input id="examplePassword" name="password" placeholder="Crie uma senha" type="password" required/>
            </FormGroup>
            <Button type='button' onClick={handleClick}>Enviar</Button>
            {showAlert && (<Alert>Usuário logado!</Alert>)}
          </form>          
      </main>
    </body>
    </AreaLogin>
    </>
  )
}

export default Login