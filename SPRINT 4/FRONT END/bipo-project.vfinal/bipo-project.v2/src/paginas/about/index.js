import React from 'react'
import AboutImage from '../../imagens/about-image.jpg'
import {Link} from 'react-router-dom'
import { AreaAbout } from './styled'
import { TitlePage } from '../../components/mainStyle'

const About = () => {
  return (
    <>
    <AreaAbout>
      <section class="about" id="about">
        <div class="max-width">
          <TitlePage>
            <h2 class="title">Sobre nós</h2>
          </TitlePage>
            <div class="about-content">
                <div class="column left">
                    <img src={AboutImage} alt="foto de homem observando movimento do prospecto"></img>
                </div>
                <div class="column right">
                  <TitlePage>
                    <div class="text"> Somos a BIPO!</div>
                  </TitlePage>
                    <p>Somos uma empresa focada em trazer acessibilidade no dia a dia dos nossos colegas investidores. 
                        Nosso principal foco é trazer o conforto para que você possa localizar os prospectos facilmente com nossa acessibildade,
                         e, para que mais pessoas consigam ingressar no mercado financeiro.</p>
                    <Link to ='/signin'> Faça parte do movimento! </Link>
                </div>
            </div>
        </div>
    </section>
    </AreaAbout>
    </>
  )
}

export default About;