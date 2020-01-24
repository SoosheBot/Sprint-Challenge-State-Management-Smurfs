import React from "react";
import "./App.css";

import SmurfsList from './SmurfsList';
import SmurfsForm from './SmurfsForm';

const App = () => { 
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsList />
        <SmurfsForm />
      </div>
    );
  };


export default App;
