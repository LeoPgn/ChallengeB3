import React, { useState } from 'react';
import apiAcessibilidade from '../../services/apiAcessibilidade';
import { TitlePage } from '../../components/mainStyle';


function Acessibilidade() {
  const [apiDigitado,setApiDigitado] = useState('');
    const [listAcessibilidade, setListAcessibilidade] = useState('');

    async function pesquisarAcessibilidade(){

    const response = await apiAcessibilidade(`http://localhost:8080/Acessibilidade/rest/Acessibilidades/${apiDigitado}`);

    console.log(response);
    setListAcessibilidade(response.data);
  }
  return (
    <>
        <TitlePage>
          <h1 style={{textAlign: 'center', padding: '30px'}}> Saiba mais sobre as acessibilidades disponíveis no site!! </h1>
          <h1 style={{textAlign: 'center'}}> Pesquise de 1-5 na barra abaixo: </h1>
        </TitlePage>
        <div style={{ textAlign:'center', padding: '30px'}}>
          <div className='InputContainer'>
            <input type="text" id="txtBusca" placeholder="Digite a acessibilidade (1-5)" style={{width: 300}} value={apiDigitado} onChange={(event) => setApiDigitado(event.target.value)} />
            <button id="btnBusca" onClick={pesquisarAcessibilidade}>Buscar</button>
          </div>
        </div>
        <TitlePage>
          <div style={{textAlign: 'center'}}>
            <h3>Código da Acessibilidade: {listAcessibilidade.codigo}</h3>
            <h3>Tipo de Acessibilidade: {listAcessibilidade.tipoAcessbilidade}</h3>
            <h3>Descrição da Acessibilidade: {listAcessibilidade.descricaoAcessibilidade}</h3>
          </div>
        </TitlePage>
    </>
  );
}
export default Acessibilidade;