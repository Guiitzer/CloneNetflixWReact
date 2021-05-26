import React from 'react';
import './header.css';


const Cabecalho = ()=>{
    return(
       <div className='headerPrincipal'>
           <div className='headerImg'>
               <a href=''></a>
           </div>
           <div className='headerContent'>Inicio</div>
           <div className='headerContent'>Séries</div>
           <div className='headerContent'>Filmes</div>
           <div className='headerContent'>Mais Recentes</div>
           <div className='headerContent'>Minha Lista</div>
           <div className='headerRight'></div>
       </div>
           
    )
}

export default Cabecalho;