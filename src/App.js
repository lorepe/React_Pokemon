import Navigation from './components/navigation/Navigation';
import './App.css';
import Fire from './components/Fire';
import Water from './components/Water';
import Rock from './components/Rock';
import Electric from './components/Electric'
import {useState} from 'react';

function App() {
  const [pokemon,setPokemon]=useState('Van a ver pokemones...');
  const handlerPokemon =(num)=>{
    if(num===1){
      setPokemon(<Fire/>)
    }else if(num===2){
      setPokemon(<Water/>)
    }else if(num===3){
      setPokemon(<Rock/>)
    }else if(num===4){
      setPokemon(<Electric/>)
    }
   }
  return (
    <div className="App">
      <Navigation pFn={handlerPokemon} />
      {pokemon}
    </div>
  );
}

export default App;
