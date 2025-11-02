function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer font-semibold  rounded-md overflow-hidden relative z-100 border bg-primary-700 border-primary-700 group px-8 py-2"
    >
      <span className="relative z-10 text-white bg-primary-700 text-xl font-bold duration-500">
        {children}
      </span>
      <span className="absolute w-full h-full bg-primary-700 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
      <span className="absolute w-full h-full bg-primary-700 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
    </button>
  );
}

export default Button;
