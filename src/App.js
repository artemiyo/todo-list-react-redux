import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.scss';
import TodoListContainer from "./containers/TodoListContainer/TodoListContainer";
import TodoItemContainer from "./containers/TodoItemContainer/TodoItemContainer";

function App() {
  return (
      <div className="app">
          <div className="container">
              <Switch>
                  <Route exact path="/" component={ TodoListContainer } />
                  <Route path="/item/:id" component={ TodoItemContainer } />
              </Switch>
          </div>
      </div>
  );
}

export default App;
