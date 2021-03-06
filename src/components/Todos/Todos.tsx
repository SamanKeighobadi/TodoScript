import * as React from "react";
import { Droppable } from "react-beautiful-dnd";
// import Todo from './Todo';
import { Todo } from "../../App";
import CompletedTodo from "./CompletedTodo";
import TodoItem from "./TodoItem";
interface TodosProps {
  todos: Todo[];
  completedTodos: Todo[];
  deleteTodo: (id: string | number) => void;
  deleteCompletedTodo: (id: string | number) => void;
  EditTodo: (e: React.FormEvent, id: string | number, title: string) => void;
  completeTodo: (id: string | number) => void;
}

const Todos: React.FC<TodosProps> = ({
  todos,
  deleteTodo,
  EditTodo,
  completeTodo,
  completedTodos,
  deleteCompletedTodo
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
      <Droppable droppableId="Todos">
        {(provided) => (
          <div
            className="bg-violet-500 rounded h-fit"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h1 className="py-3 text-slate-50 font-semibold text-xl">Todos </h1>
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
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="CompletedTodo">
        {(provided) => (
          <div className="bg-violet-500 rounded h-fit" ref={provided.innerRef}>
            <h1 className="py-3 text-slate-50 font-semibold text-xl">
              Completed Todo
            </h1>
            {completedTodos.map((todo, index) => (
              <div key={todo.id}>
             
                <CompletedTodo
                  index={index}
                  todo={todo}
                  deleteTodo={deleteCompletedTodo}
                />
              </div>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Todos;
