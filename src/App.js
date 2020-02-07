import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'


function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias ] = useState([]);
  
  useEffect (() => {
    const consultarAPI = async () => {
        const key = 'd1e033626a0a4b4ebf5ded0812a81fe5' 
        const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${key}`

        const respuesta = await fetch (url);
        const noticias = await respuesta.json();

        guardarNoticias(noticias.articles);

    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment> 
        <Header
          titulo = "Buscador de Noticias"
        />
        <div className= "container white">
          <Formulario
            guardarCategoria = {guardarCategoria}
          />
          <ListadoNoticias
            noticias = {noticias}
          />
        </div>
    </Fragment>
  );
}




export default App;
