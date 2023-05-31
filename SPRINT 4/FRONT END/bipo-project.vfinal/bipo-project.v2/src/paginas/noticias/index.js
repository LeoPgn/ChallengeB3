import React from 'react'
import { AreaNoticias } from './styled'

const Noticias = () => {
  return (
    <>
      <AreaNoticias>
        <header className="header">
          <h1>INVESTIMENTO</h1>
          <h2><a href="#">Veja as últimas notícias</a></h2>
        </header>  

        <main className="main columns">
          <section className="column main-column">
            <a className="article first-article" href="#">
              <figure className="article-image is-4by3">
                <img src="https://s2.glbimg.com/QZdb920FQ6XZeZR7uyUcELXE54k=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/U/p/PVq7rxRBinLAWQYeLdWw/logotipo-de-nubank-na-sede-do-banco-em-sao-paulo-brasil.jpg" alt="Foto do letreiro da empresa nubank"/>
              </figure>
              <div className="article-body">
                <h2 className="article-title">                                    
                  Nubank completa um ano de IPO, e ação acumula queda superior a 55%
                </h2>
                <p className="article-content">
                  Nesse período, base de clientes da instituição passou de 48 milhões para 70,4 milhões, o banco passou de prejuízo para lucro, embora ainda muito pequeno, e o México começa a ganhar relevância, com 3 milhões de clientes.
                </p>
                <footer className="article-info">
                  <span>By Paganini</span>
                  <span>42 comments</span>
                </footer>
              </div>
            </a>

            <div className="columns">
              <div className="column nested-column">
                <a className="article" href="#">
                  <figure className="article-image is-16by9">
                    <img src="https://s2.glbimg.com/xeXNvoqGHYW3ep9IgMcYeGV7wSE=/1080x608/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/s/o/dzPrcXR7ucztZNoBawTw/ap21221400124565.jpg" alt="foto do letreiro do grupo alibaba"/>
                  </figure>
                  <div className="article-body">
                    <h2 className="article-title">
                      Alibaba se divide em seis grupos para listar separadamente na Bolsa
                    </h2>
                    <p className="article-content">
                      O grupo Alibaba anunciou nesta terça-feira (28) que se dividirá em seis grupos empresariais individuais em uma das maiores reestruturações de uma empresa de tecnologia chinesa até o momento.
                      <br/>
                      Daniel Zhang, presidente e CEO da empresa, disse que a reestruturação permitirá que cada empresa individual realize seus próprios planos de captação de recursos e listagem na Bolsa.
                      <br/>
                      O Alibaba, com sede em Hangzhou, afirmou que o objetivo da reestruturação é "criar valor para os acionistas e promover a competitividade do mercado".
                      <br/>
                      Cada uma das seis novas dependências será gerenciada por seu próprio CEO e seu conselho de administração.
                      <br/>
                      A única exceção será o Taobao Tmall Commerce Group - operador de uma das principais plataformas de compras online da China - que permanecerá integralmente como propriedade do grupo Alibaba.
                      <br/>
                    </p>
                    <footer className="article-info">
                      <span>By Paganini</span>
                      <span>42 comments</span>
                    </footer>
                  </div>
                </a>
              </div>

              <div className="column">
                <a className="article" href="#">
                  <figure className="article-image is-16by9">
                    <img src="https://s2.glbimg.com/CfeoTaHWvR_bU2r2YfClcyx_uAk=/540x304/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/n/Z/tX7pKWS0yje25QHUsz0Q/zepto.jpg" alt="foto do jovem Aadit Palicha, prodígio e fundador de empresa que vale US$1 bi"/>
                  </figure>
                  <div className="article-body">
                    <h2 className="article-title">
                      O jovem de 20 anos que fundou empresa que vale US$ 1 bi
                    </h2>
                    <p className="article-content">
                      Aadit Palicha é co-fundador da Zepto, uma empresa que se dedica à entrega...
                    </p>
                    <footer className="article-info">
                      <span>By Paganini</span>
                      <span>42 comments</span>
                    </footer>
                  </div>
                </a>
                <a className="article" href="#">
                  <div className="article-body">
                    <h2 className="article-title">
                      Credit Suisse vê grandes empresas no Brasil com nível saudável de endividamento em 2023
                    </h2>
                    <p className="article-content">
                      Segundo estudo do banco, as empresas brasileiras...
                    </p>
                    <footer className="article-info">
                      <span>By Paganini</span>
                      <span>42 comments</span>
                    </footer>
                  </div>
                </a>
                <a className="article" href="#">
                  <div className="article-body">
                    <h2 className="article-title">
                      Luxo e Lucro
                    </h2>
                    <p className="article-content">                      
                      Rolls-Royce ignora a crise e bate recorde de vendas em 2022
                    </p>
                    <footer className="article-info">
                      <span>By Paganini</span>
                      <span>42 comments</span>
                    </footer>
                  </div>
                </a>
              </div>
            </div>
          </section>

          <section className="column">
            <a className="article" href="#">
              <figure className="article-image is-3by2">
                <img src="https://s2.glbimg.com/8mucR1vQDIVygYTT0kU1uLNVwG8=/540x304/top/smart/https://s.glbimg.com/jo/g1/f/original/2018/07/25/vale.jpg" alt=""/>
              </figure>
              <div className="article-body">
                <h2 className="article-title">
                  Lucro da Vale em 2022 é o terceiro maior da história entre empresas listadas na bolsa de valores
                </h2>
                <p className="article-content">
                  Ganho de R$ 95,9 bilhões, divulgado pela companhia nesta quinta-feira, fica atrás apenas...
                </p>
                <footer className="article-info">
                  <span>By Paganini</span>
                  <span>42 comments</span>
                </footer>
              </div>
            </a>
            <a className="article" href="#">
              <div className="article-body">
                <h2 className="article-title">
                  Vale tem lucro líquido de US$ 3,72 bilhões no 4º trimestre de 2022
                </h2>
                <p className="article-content">
                  Resultado representa uma queda de 30,4% em relação ao mesmo período do ano anterior.
                </p>
                <footer className="article-info">
                  <span>By Paganini</span>
                  <span>42 comments</span>
                </footer>
              </div>
            </a>
            <a className="article" href="#">
              <div className="article-body">
                <h2 className="article-title">
                  Jorge Paulo Lemann
                </h2>
                <p className="article-content">                  
                  Sócios de Lemann também perdem milhões em suas fortunas após notícia de rombo contábil na companhia varejista.
                </p>
                <footer className="article-info">
                  <span>By Paganini</span>
                  <span>42 comments</span>
                </footer>
              </div>
            </a>
            <a className="article" href="#">
              <div className="article-body">
                <h2 className="article-title">
                  Lojas Americanas
                </h2>
                <p className="article-content">
                  De lojinha de rua a império varejista: veja histórico da Americanas no país.
                </p>
                <footer className="article-info">
                  <span>By Paganini</span>
                  <span>42 comments</span>
                </footer>
              </div>
            </a>
          </section>
        </main>
      </AreaNoticias>
    </>
  )
}

export default Noticias