import * as React from "react";
import { Todo } from "../../App";
interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      {/* {todo.todo} */}
      <li>{todo.todo}</li>
    </div>
  );
};

export default TodoItem;
