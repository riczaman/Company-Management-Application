/*********************************************************************************
 * WEB422 – Assignment 04
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
 * assignment has been copied manually or electronically from any other source (including web sites) or
 * distributed to other students.
 * 
 * Name: Ricky Zaman Student ID: 121942171 Date: February 25, 2019
 * 
 * *******************************************************************************/


import React, {Component} from 'react';
import Overview from './Overview';
import Projects from './Projects';
import Teams from './Teams';
import Employees from './Employees';
import NotFound from './NotFound'
import {Route, Switch, BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Switch>
            <Route exact path='/' render = {()=>(
              <Overview title="Overview"/>
            )}/>

            <Route exact path='/projects' render={()=>(
              <Projects title="Projects"/>
            )}/>

            <Route exact path ='/teams' render={()=>(
              <Teams title="Teams"/>
            )}/>

            <Route exact path ='/employees' render = {()=>(
              <Employees title="Employees"/>
            )}/>

            <Route render={()=>(
              <NotFound title="Not Found"/>
            )}/>

        </Switch>
     </BrowserRouter>

      
  );
  
  }
}

export default App;