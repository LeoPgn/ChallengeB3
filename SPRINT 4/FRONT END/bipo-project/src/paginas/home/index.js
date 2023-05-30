import React from 'react';
import { AreaHome } from './styled';

const Home = () => {
  return (
    <>
    <AreaHome>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Faça parte do movimento da bolsa!</div>
            <div className="text-2">BIPO</div>
            <div className="text-3">eu sou <span>ACESSÍVEL</span></div>
          </div>
        </div>
      </section>
      </AreaHome>
    </>
  );
};

export default Home;