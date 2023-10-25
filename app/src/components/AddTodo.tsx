import { useState } from "react";

interface IAddTodo {
  onTodoAdd: (str: string) => void;
}

const AddTodo: React.FC<IAddTodo> = ({ onTodoAdd }) => {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (text.length < 1) {
      alert("Input must be at least 1 character long.");
      return;
    }

    if (text.length > 20) {
      alert("Input cannot be longer than 10 characters.");
      return;
    }

    onTodoAdd(text);

    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="col-3">
        <input
          className="effect-8"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span className="focus-border">
          <i></i>
        </span>
      </div>
      <div>
        <button className="add" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
