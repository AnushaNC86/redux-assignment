import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { title } from "process";

// export interface userState {
//   userData: any;
// }

// const initialState: userState = {
//   userData: [{ id: 1, title: "anu" }],
// };

export const userSlice = createSlice({
  name: "users",
  initialState: [{ id: 1, title: "anu" }],
  reducers: {
    addUser: (state, action: any) => {
      const newUser = {
        id: Date.now(),
        title: action.payload.title,
      };
      state.push(newUser);
    },
    deleteUser: (state: any, action: any) => {
      return state.filter((user: any) => user.id !== action.payload.id);
    },
  },
});

export const { addUser,deleteUser } = userSlice.actions;

export default userSlice.reducer;
