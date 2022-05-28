import React from "react";

type NavbarInputProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo:(e:React.FormEvent) =>void;
};

const NavbarInput: React.FC<NavbarInputProps> = ({ todo, setTodo,addTodo }) => {
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="enter your task..."
      />
      <button >add</button>
    </form>
  );
};

export default NavbarInput;
