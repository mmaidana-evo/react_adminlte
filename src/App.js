import React,{useState} from "react";
import {BrowserRouter} from "react-router-dom";

import RoutesWeb from "./Components/Menu/RoutesWeb";
import GlobalState from "./Context/GlobalState";
import { LoginPage } from 'reactjs-admin-lte';


function App() {

  return (
    <>
        <LoginPage.Body></LoginPage.Body>
    </>
  );
}

export default App;
