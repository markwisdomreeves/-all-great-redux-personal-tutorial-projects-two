import React, { useReducer } from "react";
import "../example-two.css";


// create the initial state
const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: "2019 Ford Mustang",
        image: "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
        features: []
    },

    // create a store object
    store: [
        { id: 1, name: "V-6 engine", price: 1500},
        { id: 2, name: "C-P model", price: 3000},
        { id: 3, name: "Racing detail package", price: 1500 },
        { id: 4, name: "Premium sound system", price: 500 },
        { id: 5, name: "Rear spoiler", price: 250 },
        { id: 6, name: "Reeves-model-35", price: 8000},
        { id: 7, name: "OPJ vince", price: 5000},
        { id: 8, name: "Water Fall Modal", price: 7000 },
        { id: 9, name: "Mountain system Updated", price: 900 },
        { id: 10, name: "Runnig Redol Model Mk", price: 500 }
    ]
}

// create a reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVE_ITEM":
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.item.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter((x) => x.id !== action.item.id),
                },
                store: [
                    ...state.store,
                    action.item
                ]
            };
        case "BUY_ITEM":
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.item.price,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        action.item
                    ]
                },
                store: state.store.filter((x) => x.id !== action.item.id)
            }
        default:
            return state;
    }
}


const ReduxExampleTwo = () => {
    // const inputRef = useRef();
    const [state, dispatch] = useReducer(reducer, initialState);

    const removeFeature = (item) => {
        dispatch({ type: 'REMOVE_ITEM', item });
    }

    const buyItem = (item) => {
        dispatch({ type: 'BUY_ITEM', item });
    }

    return (
        <div>
            <div className="box">
                <figure className="image is-128x128">
                    <img src={state.car.image} alt="img" className="img-style" />
                </figure>
                <h2>{state.car.name}</h2>
                <p>Amount: {state.car.price}</p>
                <div className="content">
                    <h6>Extra items you bought:</h6>
                    {state.car.features.length ? 
                    (
                       <ol type="1">
                           {state.car.features.map((item) => (
                               <li key={item.id}>
                                   <button
                                    onClick={() => removeFeature(item)}
                                    className="button"
                                    >
                                      X
                                   </button>

                                {item.name}

                               </li>
                           ))}
                       </ol> 
                    ) : <p>You can not purchase items from the store again because the store is currently empty.</p>
                }
                </div>
            </div>
            
            <div className="box">
                <div className="content">
                    <h4>Store:</h4>
                    {state.store.length ? 
                    (
                        <ol type="1">
                            {state.store.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => buyItem(item)}
                                        className="button"
                                    >
                                        Buy
                                    </button>
                                    {item.name}
                                </li>
                            ))}
                        </ol>
                    ) : <p>No features</p>
                }
                </div>

                <div className="content">
                    <h4>
                        Total Amount: ${state.car.price + state.additionalPrice}
                    </h4>
                </div>
            </div>
        </div>
    )

}


export default ReduxExampleTwo;