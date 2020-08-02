import React from 'react';
import {Row} from 'react-bootstrap'
// Library
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel'
import Destaques from './components/Destaques/Destaques'
import ProdutosMaisDesejados from './components/ProdutosMaisDesejados/ProdutosMaisDesejados'
import CadastroNewsletter from './components/CadastroNewsletter/CadastroNewsletter'
import SobreNos from './components/SobreNos/SobreNos'
import './App.sass'

function App() {
  return (
    <div className='main'>
      <Navbar />
      <Row className='pl-5 pr-5 mt-3'>
        <Carousel />
        <div className='p-3'>
          <Destaques />
          <ProdutosMaisDesejados />
        </div>
      </Row>
      <CadastroNewsletter />
      <SobreNos />
    </div>  
  );
}

export default App;
