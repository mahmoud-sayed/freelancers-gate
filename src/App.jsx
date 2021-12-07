import React, { Fragment } from "react";
import { Routes} from 'react-router-dom';

// components imported
import Header from "./components/header";

// pages imported
import RoutesComponent from "./components/Routes";

function App() {

  return (
    <Fragment>
        <Header/>
        <RoutesComponent/>
    </Fragment>
  );
}

export default App;
