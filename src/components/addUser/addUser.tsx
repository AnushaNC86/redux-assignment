import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAsync } from "../../redux/userslice";
import "./addUser.css";

const AddUser = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (value !== "") {
      dispatch(addUserAsync({ title: value }));
    } else {
      alert("Enter user data to add");
    }
  };

  return (
    <div className="addItemContainer">
      <div className="inputContainer">
        <form className="formContainer" onSubmit={onSubmitHandler}>
          <div className="txtField">
            <input
              type="text"
              name="user"
              placeholder="Enter User Data"
              className="inputField"
              onChange={(e: any) => setValue(e.target.value)}
            />
          </div>

          <div className="submitContainer">
            <button type="submit" className="addBtn">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
