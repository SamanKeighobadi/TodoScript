import * as React from "react";
import { Droppable } from "react-beautiful-dnd";
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
      <Droppable droppableId="Todos">
        {(provided) => (
          <div className="bg-blue-300" ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <div key={todo.id}>
                <TodoItem
                  index={index}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  EditTodo={EditTodo}
                  completeTodo={completeTodo}
                />
              </div>
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Todos;
