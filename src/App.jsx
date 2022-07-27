import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/footer";

// components imported
import Header from "./components/header";

// pages imported
import RoutesComponent from "./components/Routes";
import { fitchUser } from "./redux/userReducer/action";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fitchUser(dispatch);
  }, []);


  return (
    <Fragment>
      <Header />
      <RoutesComponent />
      <Footer />
    </Fragment>
  );
}

export default App;
