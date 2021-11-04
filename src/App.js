import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodos(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function handleTodo(remove) {
    let control = todos.indexOf(remove);
    const filter = todos.filter((item, index) => index !== control);
    setTodos(filter);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodos={addTodos} />
        <TodoList todos={todos} handleTodo={handleTodo} />
      </header>
    </div>
  );
}

export default App;
