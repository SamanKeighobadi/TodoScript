import React from "react";

type NavbarInputProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

const NavbarInput: React.FC<NavbarInputProps> = ({ todo, setTodo }) => {
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="enter your task..."
      />
      <button onClick={() => alert(todo)}>add</button>
    </div>
  );
};

export default NavbarInput;
