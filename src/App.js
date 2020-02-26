import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import OtherPage from "./OtherPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Form from './components/Form';


function App(props) {


  const { name, org, des } = useSelector(state => ({
    name: state.Form.name,
    org: state.Form.organization,
    des: state.Form.designation
  }), shallowEqual);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/other" exact component={OtherPage} />
          <Route path="/" exact component={Form} />
        </Switch>

        <h1>Name : {name}</h1>
        <h1>Organization : {org}</h1>
        <h1>Designation : {des}</h1>



      </div>
    </Router>
  );
}

export default App;
