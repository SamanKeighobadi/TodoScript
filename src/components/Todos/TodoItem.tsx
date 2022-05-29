import React, { useState } from "react";
import { Todo } from "../../App";
import { TrashIcon, CheckIcon, PencilIcon } from "@heroicons/react/solid";
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
    
      <div className={`flex justify-between items-center px-4 py-6 mb-4  ${todo.completed ? "bg-cyan-500":"bg-green-500"} w-1/2 rounded`}>
        <div>
        {edit ? (
        <input className="focus:outline-none rounded border border-sky-400 px-2 py-1"
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : (<span className="text-cyan-50 font-semibold text-lg">{todo.todo}</span>)}
          </div>
        <div className="flex  space-x-4 text-cyan-50 ">
          <TrashIcon onClick={() => deleteTodo(todo.id)} className="h-5 w-5 cursor-pointer" />
          <PencilIcon onClick={() => setEdit(true)} className="h-5 w-5 cursor-pointer" />
          <CheckIcon
            onClick={() => completeTodo(todo.id)}
            className="h-5 w-5 cursor-pointer"
          />
        </div>
      </div>
    </form>
  );
};

export default TodoItem;
