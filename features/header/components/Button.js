const Button = ({children, buttonName}) => {
  return (
    <button className="flex items-center justify-center gap-1 text-xl text-zinc-500 hover:bg-[#244d3f] hover:text-white px-5 py-2 rounded-lg font-semibold cursor-pointer active:scale-[0.98] transition duration-150">
      <div className="text-2xl">
        {children}
      </div>
      {buttonName}
    </button>
  );
};

export default Button;
