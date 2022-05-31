import { TrashIcon } from '@heroicons/react/solid';
import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { Todo } from '../../App';

interface CompletedTodoProps {
    todo: Todo;
    deleteTodo: (id: string | number) => void;
    index: number;
  }

const CompletedTodo:React.FC<CompletedTodoProps> = ({todo,index,deleteTodo})=>{
    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
        {(provided) => (
          <form
            
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div
              className={`flex justify-between items-center px-4 py-3 mx-5 mb-4  ${
                todo.completed ? "bg-green-500" : "bg-violet-900"
              }  rounded`}
            >
              <div>
                  <span className={`text-cyan-50 font-semibold text-lg line-through`}>
                  
                    {todo.todo}
                  </span>
              </div>
              <div className="flex  space-x-4 text-cyan-50 ">
                <TrashIcon
                  onClick={() => deleteTodo(todo.id)}
                  className="h-5 w-5 cursor-pointer"
                />
           
              </div>
            </div>
          </form>
        )}
      </Draggable>
    )
}


export default CompletedTodo;