import React from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const inputChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (todo === "") return;
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo,
        completed: false
      }
    ]);
    setTodo("");
  };

  const removeTodo = (todoId) => {
    const filteredList = todos.filter((item) => item.id !== todoId);

    setTodos([...filteredList]);
  };

  return (
    <div className="container">
      <form onSubmit={addTodo}>
        <p>
          <label>Enter todo label</label>
        </p>
        <input type="text" onChange={inputChange} value={todo} />
        <p>
          <button type="submit">Add Todo</button>
        </p>
      </form>
      <div className="list">
        <h2> Todo List </h2>
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              <span>{item.text}</span>
              <button onClick={() => removeTodo(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
