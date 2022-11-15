import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userslice";
import "./addUser.css";

const AddUser = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    dispatch(addUser({ title: value }));
    console.log("value", value);
  };

  return (
    <div className="addItemContainer">
      <div className="inputContainer">
        <form className="formContainer" onSubmit={onSubmitHandler}>
          <div className="txtField">
            <input
              type="text"
              name="user"
              placeholder="Enter name"
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
