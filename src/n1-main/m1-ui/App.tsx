import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Routes from './routes/Routes';

const App = () => {
  return (
    <div className="App">
      {/* hashRouter, Provider */}
      <HashRouter>

        <Header />

        <Routes />

      </HashRouter>

      {/* <Main /> */}


    </div>
  );
}

export default App;
