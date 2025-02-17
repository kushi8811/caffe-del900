import { children } from "react";

function ButtonPizzaMenu({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="text-xl w-32 h-12 rounded bg-primary-700 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
    >
      <span className="absolute bg-emerald-700 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
      <span className="absolute bg-emerald-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
      {children}
    </button>
  );
}

export default ButtonPizzaMenu;
