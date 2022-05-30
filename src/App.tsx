import React, { useState } from "react";
import "./App.css";
import NavbarInput from "./components/Navbar/NavbarInput";
import Todos from "./components/Todos/Todos";
import { v4 as uuid } from "uuid";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { toast, ToastContainer } from "react-toastify";
export interface Todo {
  id: number | string;
  todo: string;
  completed: boolean;
}

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  /**
   *
   *
   * @param {React.FormEvent} e
   */
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

  /**
   *
   *
   * @param {(number | string)} id
   */
  const deleteTodo = (id: number | string) => {
    const allTodos = [...todos];
    const filtredTodo = allTodos.filter((todo) => todo.id !== id);
    setTodos(filtredTodo);

    toast.success("Task removed", {
      pauseOnHover: false,
      position: "bottom-left",
      theme: "colored",
    });
  };

  /**
   *
   *
   * @param {React.FormEvent} e
   * @param {(string | number)} id
   * @param {string} title
   */
  const EditTodo = (e: React.FormEvent, id: string | number, title: string) => {
    e.preventDefault();
    const allTodos = [...todos];
    const foundTodo = allTodos.find((todo) => todo.id === id);

    if (foundTodo !== undefined) {
      foundTodo.todo = title;
    }
  };

  /**
   *
   *
   * @param {(string | number)} id
   */
  const completeTodo = (id: string | number) => {
    const allTodos = [...todos];
    const foundTodo = allTodos.findIndex((todo) => todo.id === id);
    let newTodo = allTodos[foundTodo];
    newTodo.completed = !newTodo.completed;
    allTodos[foundTodo] = newTodo;
    setTodos(allTodos);
  };

  // console.log(todos);
  const onDragEnd = (result: DropResult) => {
    console.log(result);
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = todos,
      completed = completedTodos;

    if (source.droppableId === "Todos") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === "Todos") {
      active.splice(destination.index, 0, add);
    } else {
      completed.splice(destination.index, 0, add);
    }

    setCompletedTodos(completed);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App   min-h-screen">
        <div className="mx-20 ">
          <NavbarInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
          <Todos
            todos={todos}
            deleteTodo={deleteTodo}
            EditTodo={EditTodo}
            completeTodo={completeTodo}
            completedTodos={completedTodos}
          />
        </div>
        {/* <h1>saman keighobadi</h1> */}
      </div>
      <ToastContainer />
    </DragDropContext>
  );
};

export default App;
