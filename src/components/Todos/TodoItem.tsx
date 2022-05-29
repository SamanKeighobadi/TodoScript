import React, { useState } from "react";
import { Todo } from "../../App";
interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: string | number) => void;
  EditTodo: (e: React.FormEvent, id: string | number, title: string) => void;
  completeTodo: (id: string | number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  deleteTodo,
  EditTodo,
  completeTodo,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  return (
    <form
      onSubmit={(e) => {
        EditTodo(e, todo.id, editTodo);
        setEdit(false);
      }}
    >
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : null}

      <li>{todo.todo}</li>

        <span onClick={() => deleteTodo(todo.id)}>&times;</span>
        {/* <DeleteIcon /> */}
        <span onClick={() => setEdit(true)}>edit</span>
        {/* <CheckIcon /> */}
        <span onClick={() => completeTodo(todo.id)}>done</span>
        {/* <EditIcon /> */}
    </form>
  );
};

export default TodoItem;
