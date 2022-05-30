import * as React from "react";
import { Droppable } from "react-beautiful-dnd";
// import Todo from './Todo';
import { Todo } from "../../App";
import TodoItem from "./TodoItem";
interface TodosProps {
  todos: Todo[];
  completedTodos: Todo[];
  deleteTodo: (id: string | number) => void;
  EditTodo: (e: React.FormEvent, id: string | number, title: string) => void;
  completeTodo: (id: string | number) => void;
}

const Todos: React.FC<TodosProps> = ({
  todos,
  deleteTodo,
  EditTodo,
  completeTodo,
  completedTodos,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
      <Droppable droppableId="Todos">
        {(provided) => (
          <div
            className="bg-blue-300 rounded"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1 className="py-3 text-slate-600 font-semibold text-xl">
              Todos{" "}
            </h1>
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

      <Droppable droppableId="CompletedTodo">
        {(provided) => (
          <div className="bg-rose-300 rounded" ref={provided.innerRef}>
            <h1 className="py-3 text-slate-600 font-semibold text-xl">
              Completed Todo
            </h1>
            {completedTodos.map((todo, index) => (
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
