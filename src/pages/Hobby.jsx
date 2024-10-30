import StatusBar from "../components/StatusBar";
import HobbyHeader from "../components/HobbyHeader";
import HobbyMenu from "../components/HobbyMenu";

const Hobby = () => {
  return (
    <div className="webAppWrapper">
      <div className="startWrapper">
        <StatusBar />
        <HobbyHeader />
        <HobbyMenu />
      </div>
    </div>
  );
};

export default Hobby;
