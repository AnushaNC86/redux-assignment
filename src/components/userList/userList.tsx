import { useEffect } from "react";
import UserItem from "../userItem/userItem";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAsync } from "../../redux/userslice";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  return (
    <div className="userListConatainer">
      {users.map((user: any, i: number) => {
        return <UserItem key={user.id} id={user.id} title={user.title} />;
      })}
    </div>
  );
};

export default UserList;
