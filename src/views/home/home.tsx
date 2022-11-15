import AddUser from "../../components/addUser/addUser";
import UserList from "../../components/userList/userList";
import "./home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="Add">
        <AddUser />
        <UserList />
      </div>
    </div>
  );
};

export default Home;
