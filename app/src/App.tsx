import { useState } from "react";

import { ITodo } from "./types";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function onTodoAdd(str: string) {
    const obj: ITodo = {
      text: str,
      id: new Date().getTime(),
    };
    setTodos((prev) => [...prev, obj]);
  }
  function handleDelete(id: Number) {
    const filtered = todos.filter((t) => t.id != id);
    console.log(filtered);
    setTodos(filtered);
  }

  return (
    <div>
      <h1>my todos</h1>
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        extraCss="text-bold"
      />
    </div>
  );
}

export default App;
