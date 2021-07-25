// import {Route} from "react-router";
import React from "react";
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

import { Home } from './components/Home';
import { AddEmployee } from './components/AddEmployee';
import { EditEmployee } from './components/EditEmployee';

function App() {
  return (
    <React.Fragment>
      <GlobalProvider>
        <Router>
          <Switch>
          {/* <Route path="/" exact >
            <Home/>
          </Route>
          <Route path="/add" exact>
            <AddEmployee/>
          </Route>
          <Route path="/edit/:id" exact>
            <EditEmployee/>
          </Route> */}
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddEmployee} />
          <Route path="/edit/:id" component={EditEmployee} />
          </Switch>
        </Router>
      </GlobalProvider>
    </React.Fragment>
    
  );
}
export default App;