import * as React from 'react';
// import Todo from './Todo';
import {Todo} from '../../App'
import TodoItem from './TodoItem';
interface TodosProps {
    todos:Todo[]
}

const Todos:React.FC<TodosProps> = ({todos}) =>{
    return(
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    <TodoItem todo={todo} />
                    {/* <li>
                        {todo.todo}
                    </li> */}
                </div>
            ))}
        </div>
    )
}

export default Todos;