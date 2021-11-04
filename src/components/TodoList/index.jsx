import "./style.css";

function TodoList({ todos, handleTodo }) {
  return (
    <div>
      <ul>
        {todos.map((item, indice) => (
          <li key={indice}>
            {item}{" "}
            <button className="btn" onClick={() => handleTodo(item)}>
              Concluir tarefa
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
