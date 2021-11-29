import React from "react";
import { createStore, } from 'redux';
import allReducers from "./redux/reducers";


const store = createStore(allReducers)

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
