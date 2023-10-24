import { ITodo } from "../types";

interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
  handleDelete: (num: Number) => void;
}

const TodoList: React.FC<ITodoList> = ({ todos, extraCss, handleDelete }) => {
  return (
    <div className={extraCss}>
      {todos.map((t) => (
        <p key={t.id.toString()}>
          {t.text}
          <button onClick={() => handleDelete(t.id)}>delete</button>
        </p>
      ))}
    </div>
  );
};

export default TodoList;
