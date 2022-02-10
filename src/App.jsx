import React, { Fragment } from "react";
import Footer from "./components/footer";

// components imported
import Header from "./components/header";

// pages imported
import RoutesComponent from "./components/Routes";

function App() {


  return (
    <Fragment>
      <Header />
      <RoutesComponent />
      <Footer />
    </Fragment>
  );
}

export default App;
