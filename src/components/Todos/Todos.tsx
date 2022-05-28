import * as React from 'react';
// import Todo from './Todo';
import {Todo} from '../../App'
import TodoItem from './TodoItem';
interface TodosProps {
    todos:Todo[],
    deleteTodo:(id:string|number) => void;
}

const Todos:React.FC<TodosProps> = ({todos,deleteTodo}) =>{
    return(
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <TodoItem todo={todo} deleteTodo={deleteTodo}/>
                    {/* <li>
                        {todo.todo}
                    </li> */}
                </div>
            ))}
        </div>
    )
}

export default Todos;