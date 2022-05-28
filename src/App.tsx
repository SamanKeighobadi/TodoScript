import { useState } from "react";
import "./App.css";
import NavbarInput from "./components/Navbar/NavbarInput";

const App = () => {

  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <h1>saman keighobadi</h1>
      <NavbarInput  todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
