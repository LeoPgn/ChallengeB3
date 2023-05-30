import axios from "axios";

const apiAcessibilidade = axios.create( 
    {baseURL:"http://localhost:8080/Acessibilidade/rest/Acessibilidades/"}
)

export default apiAcessibilidade;