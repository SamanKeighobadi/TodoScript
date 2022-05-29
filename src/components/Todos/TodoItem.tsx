import React, { useState } from "react";
import { Todo } from "../../App";
interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: string | number) => void;
  EditTodo:(e:React.FormEvent,id:string | number,title:string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo,EditTodo }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);


  return (
    <form onSubmit={(e) => {
      EditTodo(e, todo.id,editTodo)
      setEdit(false)
    }}>
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : null}

      <li>{todo.todo}</li>
      <span onClick={() => deleteTodo(todo.id)}>&times;</span>
      <span onClick={() => setEdit(true)}>edit</span>
    </form>
  );
};

export default TodoItem;
