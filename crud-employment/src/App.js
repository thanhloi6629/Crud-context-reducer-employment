// import {Route} from "react-router";
import React from "react";
import { Route, Router } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

import { Home } from './components/Home';
import { AddEmployee } from './components/AddEmployee';
import { EditEmployee } from './components/EditEmployee';

function App() {
  return (
    <React.Fragment>
      <GlobalProvider>
        <Router>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
        </Router>
      </GlobalProvider>
    </React.Fragment>
    
  );
}

export default App;