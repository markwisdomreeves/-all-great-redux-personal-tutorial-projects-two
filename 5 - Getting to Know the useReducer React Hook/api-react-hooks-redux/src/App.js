import React from 'react';
import JavascriptReduce from "./JavascriptReduceExample/JavascriptReduce";
import ReduxExampleOne from './ReduxExampleOne/ReduxExampleOne';
import ReduxExampleTwo from './ReduxExampleTwo/ReduxExampleTwo';
import "./example-one.css";
import "./App.css";


const App = () => {
  return (
      <div className="app">
          <ReduxExampleTwo />
         {/* <JavascriptReduce />
         <ReduxExampleOne /> */}
      </div>
  );
};


export default App;
