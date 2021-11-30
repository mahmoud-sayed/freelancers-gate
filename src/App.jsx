import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { increment, decrement } from './redux/actions/index';


function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.loggerReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {isLogged ? <h3>this is a secrit thing for loged in only</h3> :''}
    </div>
  );
}

export default App;
