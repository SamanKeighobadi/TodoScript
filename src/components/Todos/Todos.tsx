import * as React from 'react';
// import Todo from './Todo';
import {Todo} from '../../App'
import TodoItem from './TodoItem';
interface TodosProps {
    todos:Todo[],
    deleteTodo:(id:string|number) => void;
    EditTodo:(e:React.FormEvent,id:string | number,title:string) => void;
}

const Todos:React.FC<TodosProps> = ({todos,deleteTodo,EditTodo}) =>{
    return(
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <TodoItem todo={todo} deleteTodo={deleteTodo} EditTodo={EditTodo}/>
                    
                </div>
            ))}
        </div>
    )
}

export default Todos;