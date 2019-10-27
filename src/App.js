import React from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { increment, decrement } from './actions/counterAction';
import OtherPage from "./OtherPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Interaction from './Interaction';

import Form from './components/Form';


function App(props) {
  const counter = useSelector(state => state.counter);
  const auth = useSelector(state => state.auth);

  const { name, org, des } = useSelector(state => ({
    name: state.FormReducer.name,
    org: state.FormReducer.organization,
    des: state.FormReducer.designation
  }), shallowEqual);

  const dispatch = useDispatch();
  console.log(props);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/other" exact component={OtherPage} />
          <Route path="/login" exact component={Form} />
        </Switch>
        <Interaction />
        <h1>Counter {counter}</h1>
        {console.log("This is App Render: ")}
        <h1>Name : {name}</h1>
        <h1>Organization : {org}</h1>
        <h1>Designation : {des}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(5))}>-</button>
        {auth ? <h3>You are logged in</h3> : <h3>your are not logged in</h3>}


      </div>
    </Router>
  );
}

export default App;
