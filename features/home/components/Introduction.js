import { GoPlus } from "react-icons/go";

const Introduction = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center gap-5 mt-16">
      <h1 className="text-5xl font-bold ">
        Friends to keep close in your life
      </h1>
      <div className=" text-zinc-500">
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the{" "}
        </p>
        <p>relationships that matter most.</p>
      </div>
      <button className="flex items-center justify-center gap-1 text-xl bg-[#244d3f] text-white px-5 py-2 rounded-lg font-semibold cursor-pointer active:scale-[0.98] transition">
        <div>
          <GoPlus />
        </div>
        Add a friend
      </button>
    </div>
  );
};

export default Introduction;
