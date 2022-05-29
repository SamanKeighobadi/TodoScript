import React, { useState } from "react";
import "./App.css";
import NavbarInput from "./components/Navbar/NavbarInput";
import Todos from "./components/Todos/Todos";
import { v4 as uuid } from "uuid";
export interface Todo {
  id: number | string;
  todo: string;
  completed: boolean;
}

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos((prevState) => [
        ...prevState,
        { todo, id: uuid(), completed: false },
      ]);
      setTodo("");
    }
  };

  const deleteTodo = (id: number | string) => {
    const allTodos = [...todos];
    const filtredTodo = allTodos.filter((todo) => todo.id !== id);
    setTodos(filtredTodo);
  };
  const EditTodo = (e: React.FormEvent, id: string | number, title: string) => {
    e.preventDefault();
    const allTodos = [...todos];
    const foundTodo = allTodos.find((todo) => todo.id === id);

    if (foundTodo !== undefined) {
      foundTodo.todo = title;
    }
  };

  const completeTodo = (id: string | number) => {
    const allTodos = [...todos];
    const foundTodo = allTodos.findIndex((todo) => todo.id === id);
    let newTodo = allTodos[foundTodo];
    newTodo.completed = !newTodo.completed; 
    allTodos[foundTodo] = newTodo;
    setTodos(allTodos);
 
  };

  // console.log(todos);

  return (
    <div className="App  bg-cyan-100 min-h-screen">
      <div className="mx-20 ">
        <NavbarInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <Todos
          todos={todos}
          deleteTodo={deleteTodo}
          EditTodo={EditTodo}
          completeTodo={completeTodo}
        />
      </div>
      {/* <h1>saman keighobadi</h1> */}
    </div>
  );
};

export default App;
