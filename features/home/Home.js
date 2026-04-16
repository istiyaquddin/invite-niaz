import Friends from "./components/Friends";
import Introduction from "./components/Introduction";
import SimpleCard from "./components/SimpleCard";

const Home = () => {
  return (
    <div className="px-80">
      <Introduction />
      <SimpleCard />
      <Friends/>
    </div>
  );
};

export default Home;
