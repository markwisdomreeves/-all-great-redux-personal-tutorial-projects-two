import React from 'react';
import "./App.css";
import WithCustomMiddleware from './components/WithCustomMiddleware';



function App () {
    return (
      <div className="app">
         <WithCustomMiddleware />
      </div>
    );
}


export default App;
