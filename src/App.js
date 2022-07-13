import React, {Fragment, useState} from 'react';
import './index.css';
import Tweet from './componentes/Tweet';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Spinner from './componentes/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() { 

  const [userName, setUserName] = useState('');
  const [cargando, guardarCargando] = useState(false);
  const [datos, setDatos] = useState([]);
  
  let componente;
  if(cargando) {
    componente = <Spinner/>
  } else {
        if(datos != null) {
          componente  = <Tweet
          userName={userName}
          datos={datos}
          /> 
        }
        
  }

  return (
    <Fragment>
      <Header titulo="Buscador de Tweets" />
      <div className="container">
        <Formulario
          userName={userName}
          setUserName={setUserName}
          setDatos={setDatos}
          guardarCargando={guardarCargando}
        />
          <div className='mensajes'>
           {componente}
          </div>
      </div>
      
    </Fragment>
    
  );
}

export default App;
