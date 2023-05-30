import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./paginas/home";
import About from "./paginas/about";
import Noticias from "./paginas/noticias";
import Cursos from "./paginas/cursos";
import Account from "./paginas/cadastro";
import Login from "./paginas/login";
import { GlobalStyles, darkTheme, lightTheme} from "./components/mainStyle";
import { ThemeProvider } from "styled-components";
import Acessibilidade from "./paginas/acessibilidade";


function App() {
  const [tema,setTema] = useState('light');
  const temaAlternar = () => {
    tema === 'light' ? setTema ('dark') : setTema('light');
  }
  return (
    <>
      <ThemeProvider theme={tema==='dark' ? lightTheme : darkTheme }>
        <botaoFluid/>
        <Router>
          <Navbar switchTheme={temaAlternar} />
          <GlobalStyles/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/sobre' exact component={About}/>
            <Route path='/noticias' exact component={Noticias}/>
            <Route path='/cursos' exact component={Cursos}/>
            <Route path='/signin' exact component={Account}/>
            <Route path="/login" exact component={Login}/>
            <Route path='/acessibilidade' exact component={Acessibilidade}/>
          </Switch>
        </Router>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;