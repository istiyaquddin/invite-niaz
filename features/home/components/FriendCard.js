import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
  const { id, name, profilePic, category, joined, status } = friend;
  return (
    <Link
      href={`/friend/${id}`}
      className="col-span-1 flex flex-col justify-center items-center w-full border rounded-xl py-5 gap-2 border-zinc-200"
    >
      <div className="rounded-full overflow-hidden">
        <Image width={70} height={70} src={profilePic} alt={name} />
      </div>
      <p className="font-semibold text-lg">{name}</p>
      <p className="text-sm text-zinc-400">{joined}</p>
      <p className="text-xs bg-[#cbfadb] px-3 py-1 rounded-xl text-[#244d3f]">
        {category}
      </p>
      <p className="font-semibold px-3 py-1 rounded-2xl bg-red-500 text-white text-sm">
        {status}
      </p>
      
    </Link>
  );
};

export default FriendCard;
