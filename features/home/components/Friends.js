import FriendCard from "./FriendCard";

const friends = [
  {
    id: 1,
    name: "Aarif Rahman",
    profilePic: "https://i.pravatar.cc/300?img=1",
    category: "job",
    joined: "60d ago",
    status: "on-track",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    profilePic: "https://i.pravatar.cc/300?img=2",
    category: "family",
    joined: "120d ago",
    status: "overdue",
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    profilePic: "https://i.pravatar.cc/300?img=3",
    category: "hobby",
    joined: "20d ago",
    status: "on-track",
  },
  {
    id: 4,
    name: "Sadia Islam",
    profilePic: "https://i.pravatar.cc/300?img=4",
    category: "work",
    joined: "90d ago",
    status: "overdue",
  },
  {
    id: 5,
    name: "Rakib Hossain",
    profilePic: "https://i.pravatar.cc/300?img=5",
    category: "job",
    joined: "45d ago",
    status: "on-track",
  },
  {
    id: 6,
    name: "Mim Akter",
    profilePic: "https://i.pravatar.cc/300?img=6",
    category: "family",
    joined: "10d ago",
    status: "on-track",
  },
  {
    id: 7,
    name: "Fahim Ahmed",
    profilePic: "https://i.pravatar.cc/300?img=7",
    category: "hobby",
    joined: "75d ago",
    status: "overdue",
  },
  {
    id: 8,
    name: "Jannat Sultana",
    profilePic: "https://i.pravatar.cc/300?img=8",
    category: "work",
    joined: "30d ago",
    status: "on-track",
  },
  {
    id: 9,
    name: "Imran Kabir",
    profilePic: "https://i.pravatar.cc/300?img=9",
    category: "job",
    joined: "15d ago",
    status: "on-track",
  },
  {
    id: 10,
    name: "Riya Chowdhury",
    profilePic: "https://i.pravatar.cc/300?img=10",
    category: "family",
    joined: "200d ago",
    status: "overdue",
  },
  {
    id: 11,
    name: "Shakib Mahmud",
    profilePic: "https://i.pravatar.cc/300?img=11",
    category: "hobby",
    joined: "5d ago",
    status: "on-track",
  },
  {
    id: 12,
    name: "Tasnia Rahman",
    profilePic: "https://i.pravatar.cc/300?img=12",
    category: "work",
    joined: "110d ago",
    status: "overdue",
  },
];

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
