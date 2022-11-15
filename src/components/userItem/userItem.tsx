import "./userItem.css";
import { deleteUser } from "../../redux/userslice";
import { useDispatch } from "react-redux";

const UserItem = (props: any) => {
  const dispatch = useDispatch();

  const onDeleteHandler = (e: any) => {
    dispatch(
      deleteUser({
        id: props.id,
      })
    );
  };
  return (
    <div className="userItemContainer" key={props.id}>
      <div className="userDetails">{props.title}</div>
      <div>
        <button className="removeBtn" onClick={onDeleteHandler}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default UserItem;
