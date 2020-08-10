import React, {useReducer, Fragment} from 'react';
import "../example-one.css";


const initialState = {
  count: 0,
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      }
    case "DECREMENT":
      return {
        count: state.count - 1,
      }
    default:
      throw new Error();
  }
}

const ReduxExampleOne = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: "INCREMENT"});
    console.log({ type: "INCREMENT" + " " + "" + "had been dispatch to increase"})
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT"});
    console.log({ type: "DECREMENT" + " " + "" + "had been dispatch to decrease"})
  };

  return (
    <Fragment>
      <div className="box">
        <h1>Counter</h1>
        <p>Count: {state.count}</p>

        <div>
          <button type="button" onClick={handleIncrease} className="button is-grey">
              +
          </button>
          <button type="button" onClick={handleDecrement} className="button is-dark">
              -
          </button>
        </div>
      </div>
    </Fragment>
  );
};


export default ReduxExampleOne;
