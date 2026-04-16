import { FiPhoneCall } from "react-icons/fi";
import { IoVideocamSharp } from "react-icons/io5";
import { LuMessageSquareText } from "react-icons/lu";

import friends from "@/data/friends.json";
import Image from "next/image";

const page = async ({ params }) => {
  const { id } = await params;

  const friend = friends.find((frd) => frd.id == id);
  const {
    name,
    profilePic,
    category,
    joined,
    status,
    bio,
    preferredContact,
    lastContactDaysAgo,
    goalDays,
    nextDueDate,
  } = friend;
  return (
    <div className="px-72 py-20 flex gap-5">
      {/* left */}
      <div className=" w-[30%] flex flex-col gap-5">
        <div className="border border-zinc-200 shadow rounded-xl py-5 flex flex-col justify-center items-center gap-2">
          <Image
            width={100}
            height={100}
            src={profilePic}
            alt={name}
            className="rounded-full"
          />
          <p className="text-xl font-semibold">{name}</p>
          <p className="font-semibold px-3 py-1 rounded-2xl bg-red-500 text-white text-sm">
            {status}
          </p>
          <p className="text-xs bg-[#cbfadb] px-3 py-1 rounded-xl text-[#244d3f]">
            {category}
          </p>
          <p className="italic text-lg font-semibold text-zinc-500">{`"${bio}"`}</p>
          <p className="text-zinc-500">Preferred: {preferredContact}</p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="cursor-pointer text-center py-3 rounded-lg border border-zinc-100 shadow font-semibold">
            Snooze 2 weeks
          </button>
          <button className="cursor-pointer text-center py-3 rounded-lg border border-zinc-100 shadow font-semibold">
            Archive
          </button>
          <button className="cursor-pointer text-center py-3 rounded-lg border border-zinc-100 shadow font-semibold">
            Delete
          </button>
        </div>
      </div>
      {/* right side */}
      <div className="w-[70%] flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1 flex justify-center items-center flex-col gap-2 text-zinc-600 border border-zinc-100 shadow rounded-xl py-10">
            <p className="text-4xl font-bold">{lastContactDaysAgo}</p>
            <p className="text-lg font-semibold">Days Since Contact</p>
          </div>
          <div className="col-span-1 flex justify-center items-center flex-col gap-2 text-zinc-600 border border-zinc-100 shadow rounded-xl py-10">
            <p className="text-4xl font-bold">{goalDays}</p>
            <p className="text-lg font-semibold">Goal(days)</p>
          </div>
          <div className="col-span-1 flex justify-center items-center flex-col gap-2 text-zinc-600 border border-zinc-100 shadow rounded-xl py-10">
            <p className="text-4xl font-bold">{nextDueDate}</p>
            <p className="text-lg font-semibold">Next Due</p>
          </div>
        </div>
        <div className="border border-zinc-100 shadow rounded-xl flex justify-between py-5 px-10">
          <div>
            <h1 className="text-xl font-semibold text-green-700">
              Relationship Goal
            </h1>
            <p className="mt-5">
              Contact every <span className="font-bold">30 days</span>
            </p>
          </div>
          <div>
            <button className="px-4 py-1 border border-zinc-600/20 rounded-xl cursor-pointer">
              Edit
            </button>
          </div>
        </div>
        <div className="border border-zinc-100 shadow rounded-xl py-5 px-10">
          <p className="text-xl font-semibold">Quick check-in</p>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="col-span-1 bg-zinc-100 border border-zinc-200 rounded-lg py-5 text-center">
              <div className="flex justify-center text-xl">
                <FiPhoneCall />
              </div>
              <p className="text-xl font-semibold">Call</p>
            </div>
            <div className="col-span-1 bg-zinc-100 border border-zinc-200 rounded-lg py-5 text-center">
              <div className="flex justify-center text-xl">
                <LuMessageSquareText />
              </div>
              <p className="text-xl font-semibold">Text</p>
            </div>
            <div className="col-span-1 bg-zinc-100 border border-zinc-200 rounded-lg py-5 text-center">
              <div className="flex justify-center text-xl">
                <IoVideocamSharp />
              </div>
              <p className="text-xl font-semibold">Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
