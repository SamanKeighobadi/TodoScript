import React, { useState } from "react";
import "./App.css";
import NavbarInput from "./components/Navbar/NavbarInput";
import Todos from "./components/Todos/Todos";
 export interface Todo {
  id:number | string;
  todo:string;
  completed:boolean;
}

const App = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo =(e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos(prevState => [...prevState,{todo,id:Date.now(),completed:false}]);
      setTodo("");
    }
  }

  const deleteTodo = (id:number | string ) =>{
    const allTodos = [...todos];
    const filtredTodo = allTodos.filter(todo => todo.id !== id );
    setTodos(filtredTodo);

  }

  // console.log(todos);

  return (
    <div className="App">
      <h1>saman keighobadi</h1>
      <NavbarInput  todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  
  );
};

export default App;
