import friends from "@/data/friends";
import FriendCard from "./FriendCard";

const Friends = () => {
  return (
    <div className="py-8">
      <h1 className="font-semibold text-2xl">Your Friends</h1>
      <div className="grid grid-cols-4 gap-5 mt-8">
        {friends.map((friend) => (
          <FriendCard friend={friend} key={friend.id} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
