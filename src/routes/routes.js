import React from "react";
import { BrowserRouter as Router,Routes , Route } from 'react-router-dom';
//import PrivateRoute from "./private-route";

import Login from '../pages/Login'
import Orders from '../pages/Orders'
import Home from "../pages/Home";


function App(){
    return(
        <Router>
          <Routes>
            <Route path='/' Component={Login}/>
            <Route path='/home' Component={Home}/>
            <Route path='/home/orders' Component={Orders}/>
          </Routes>
      </Router>
    )
}
export default App;