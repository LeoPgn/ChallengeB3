import React from 'react'
import '../../App.css';
import {Link} from 'react-router-dom'
import { AreaCadastro } from './styled'
import { FormGroup, Label, Input } from 'reactstrap' 

const Account = () => {
  async function Enviar() {
    alert('Usuário cadastrado!')
    }
  return (
    <>
      <AreaCadastro>
        <body>
          <main class="container">
            <h2>Cadastre-se</h2>
             <form action="">
            <div class="input-field">
                <input type="text" name="nome" id="nome" placeholder="Nome completo" required/>
            </div>
            <div class="input-field">
              <FormGroup>
                <Label for="exampleDate"></Label>
                  Dt. Nasc:<Input id="exampleDate" name="date" placeholder="Digite sua idade:" type="date" required/>
              </FormGroup>
            </div>
            <div class="input-field">
              <FormGroup>
                <Label for="exampleEmail"></Label>
                  <Input id="exampleEmail" name="email" placeholder="Digite seu e-mail" type="email" required/>
              </FormGroup>
            </div>
            <div className='input-field'>
              <FormGroup>
                <Label for="examplePassword"></Label>
                  <Input id="examplePassword" name="password" placeholder="Crie uma senha" type="password" required/>
              </FormGroup>
            </div>
              <input type="submit" value="Enviar" onClick={Enviar}/>
            </form>
            <div>
                <span>Já tem conta? Faça <Link to='/login'>Login</Link></span>
            </div>     
          </main>
        </body>
      </AreaCadastro>
    </>
  )
}
export default Account