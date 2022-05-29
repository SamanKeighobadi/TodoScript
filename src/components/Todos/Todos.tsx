import * as React from "react";
// import Todo from './Todo';
import { Todo } from "../../App";
import TodoItem from "./TodoItem";
interface TodosProps {
  todos: Todo[];
  deleteTodo: (id: string | number) => void;
  EditTodo: (e: React.FormEvent, id: string | number, title: string) => void;
  completeTodo: (id: string | number) => void;
}

const Todos: React.FC<TodosProps> = ({
  todos,
  deleteTodo,
  EditTodo,
  completeTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem
            todo={todo}
            deleteTodo={deleteTodo}
            EditTodo={EditTodo}
            completeTodo={completeTodo}
          />
        </div>
      ))}
    </div>
  );
};

export default Todos;
