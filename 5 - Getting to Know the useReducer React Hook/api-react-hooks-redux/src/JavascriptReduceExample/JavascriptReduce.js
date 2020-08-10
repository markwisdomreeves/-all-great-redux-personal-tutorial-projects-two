
import React from 'react';


// example one
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const reducer = function (tally, number) {
  console.log(`Tally ${tally}, Next number: ${number}, New Total: ${tally + number}`);

  return tally + number;
}

const total = numbers.reduce(reducer, 0);

console.log(`Total ${total}`)


// example two
const letters = ['M', 'a', 'r', 'k', " ", 'W', 'i', 's', 'd', 'o', 'm', " ", 'R', 'e', 'e', 'v', 'e', 's'];

const myName = letters.reduce(
  function(acc, arrayIntem) {
    return acc + arrayIntem;
  },
'');

console.log(myName);



const App = () => {
    return (
      <div className="app">
        
      </div>
    );
  };
  
  export default App;
  