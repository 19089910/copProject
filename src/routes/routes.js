import React from "react";
import { BrowserRouter as Router,Routes , Route } from 'react-router-dom';
import PrivateRoute from "./private-route";


import Login from '../pages/Login'
import Orders from '../pages/Orders'
import Home from "../pages/Home";
import HomeHolerite from "../pages/HomeHolerite";
import HomeFuncionarios from "../pages/HomeFuncionarios";
import HomeUsuarios from "../pages/HomeUsuarios";


function App(){
    return(
        <Router>
          <Routes>
            <Route path='/' element={<Login/>} exact/>
            <Route element={<PrivateRoute/>}>
              <Route element={<Home/>} path='/home'/>
              <Route element={<HomeHolerite/>} path='/home/holerite'/>
              <Route element={<HomeFuncionarios/>} path='/home/funcionarios'/>
              <Route element={<HomeUsuarios/>} path='/home/usuarios'/>
              <Route element={<Orders/>} path='/home/usuarios/o'/>
            </Route>
          </Routes>
      </Router>
    )
}
export default App;