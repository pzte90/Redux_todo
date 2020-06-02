import React from 'react';
import './App.css';
import TodoList from './containers/TodoList';
import AddTodo from './containers/AddTodo';
import FilterTodo from './containers/FilterTodo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo/>
        <TodoList/>
        <FilterTodo/>
      </header>
    </div>
  );
}

export default App;
