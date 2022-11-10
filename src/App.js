
import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
    <div className='nav-productos'> 
    <NavBar/>
    </div>  
    <ItemListContainer/>
      <header className="App-header">
        <p className='Cibeles'>
          Cibeles
        </p>
      </header>
    </div>
  );
}

export default App;
