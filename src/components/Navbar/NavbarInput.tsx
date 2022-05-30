import React from "react";

type NavbarInputProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
};

const NavbarInput: React.FC<NavbarInputProps> = ({
  todo,
  setTodo,
  addTodo,
}) => {
  return (
    <form onSubmit={addTodo} className="py-6">
      <input
        className="border border-violet-500 drop-shadow-lg rounded py-1 px-3 mr-1 w-80 focus:outline-none placeholder:text-slate-400 "
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your todo..."
      />
      <button className="bg-violet-600 text-white px-3 py-1 rounded">Add</button>
    </form>
  );
};

export default NavbarInput;
