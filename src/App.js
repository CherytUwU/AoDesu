import React from 'react';
import {Slideshow, Slide, TextoSlide} from './componentes/Slideshow'
import './styles.css';
import styled from 'styled-components';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

const url = "https://cranky-goodall-7753cf.netlify.app/";
const pelicula = "ver/";
const serie = "anime/";

const opcion1 = "#";
const opcion2 = "#";
const opcion3 = "#";
const opcion4 = "#";

const name1 = "Kimi no Na wa";
const name2 = "Koe no Katachi";
const name3 = "Mahou Shoujo Site";
const name4 = "Boku no Hero Academia";

const frase = "Disfruta AHORA mismo de";

const App = () => {
  return (
    <main>
      <h2>Nuevos</h2>
      <Slideshow controles={true} autoplay={true} velocidad="500" intervalo="5000">
        <Slide>
            <a href={url, pelicula}>
              <img src={img1} alt="" />
            </a>
            <TextoSlide>
              <p>¡{frase} <strong>{name1}</strong>!</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href={url, pelicula}>
              <img src={img2} alt="" />
            </a>
            <TextoSlide>
            <p>¡{frase} <strong>{name2}</strong>!</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href={url, serie}>
              <img src={img3} alt="" />
            </a>
            <TextoSlide>
            <p>¡{frase} <strong>{name3}</strong>!</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href={url, serie}>
              <img src={img4} alt="" />
            </a>
            <TextoSlide>
            <p>¡{frase} <strong>{name4}</strong>!</p>
            </TextoSlide>
          </Slide>
      </Slideshow>
    </main>
  );
}

export default App;