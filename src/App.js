import React from 'react';
import {Slideshow, Slide, TextoSlide} from './componentes/Slideshow'
import './index.css';
import styled from 'styled-components';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

const App = () => {
  return (
    <main>
      <h2><i className="fas fa-plus-square"></i>Nuevos</h2>
      <Slideshow controles={true} autoplay={true} velocidad="500" intervalo="5000">
          <Slide>
            <a href="https://www.youtube.com">
              <img src={img1} alt="" />
            </a>
            <TextoSlide>
              <p>Disfruta ahora mismo de Your Name</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://www.youtube.com">
              <img src={img2} alt="" />
            </a>
            <TextoSlide>
              <p>Disfruta ahora mismo de Koe no Katachi</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://www.youtube.com">
              <img src={img3} alt="" />
            </a>
            <TextoSlide>
              <p>Proximamente</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://www.youtube.com">
              <img src={img4} alt="" />
            </a>
            <TextoSlide>
              <p>Proximamente</p>
            </TextoSlide>
          </Slide>
      </Slideshow>
    </main>
  );
}

export default App;