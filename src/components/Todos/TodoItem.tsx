import * as React from "react";
import { Todo } from "../../App";
interface TodoItemProps {
  todo: Todo;
  deleteTodo:(id:string|number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo,deleteTodo }) => {
  return (
    <div>
      {/* {todo.todo} */}
      <li>{todo.todo}</li>
      <span onClick={() => deleteTodo(todo.id)}>
          &times;
      </span>
    </div>
  );
};

export default TodoItem;
