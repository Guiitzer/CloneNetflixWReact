import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow.js';
import FeatureMovie from './components/FeatureMovie'
import './App.css';
import Cabecalho from './components/header'

const App = () =>{

const [movieList, setMovieList] = useState([]);
const [dadosDestaque, setDadosDestaque] = useState(null);

  useEffect(() =>{

    const loadAll = async () =>{
      // Pegando a Lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
      //Pegando os Dados
      let originals = list.filter(i=>i.slug === 'originals');
      let aleatorio = Math.floor(Math.random() * (originals[0].items.results.length)-1)
      let escolhido = originals[0].items.results[aleatorio];
      let escolhidoInfo = await Tmdb.getMovieInfo (escolhido.id, 'tv');
      setDadosDestaque(escolhidoInfo);
      console.log(escolhidoInfo)
      

      
    }
  
    loadAll();
  }, []);

  console.log('renderizou o componente App.js', movieList);

  return(
  <div className="page">

      <Cabecalho />

      {dadosDestaque &&
        <FeatureMovie item={dadosDestaque} />
      }


    <section className="lists">
      {movieList.map((item, key)=>(
        <MovieRow key={key} title={item.title} items={item.items}/>
      ))}
    </section>
  </div>
  )}

  export default App