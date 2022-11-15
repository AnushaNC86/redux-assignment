import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersAsync: any = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    const response = await fetch("http://localhost:5000/users");
    if (response.ok) {
      const users = await response.json();
      return { users };
    }
  }
);

export const addUserAsync: any = createAsyncThunk(
  "users/addUserAsync",
  async (payload: any) => {
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: payload.title }),
    });
    if (response.ok) {
      const user = await response.json();
      return { user };
    }
  }
);

export const deleteUserAsync: any = createAsyncThunk(
  "users/deleteUserAsync",
  async (payload: any) => {
    const response = await fetch(`http://localhost:5000/users/${payload.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { id: payload.id };
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState: [{ id: 1, title: "anu" }],
  reducers: {},
  extraReducers: {
    [getUsersAsync.pending]: (state: any, action: any) => {
      console.log("data fecthing..");
    },
    [getUsersAsync.fulfilled]: (state: any, action: any) => {
      console.log("data fetched..");
      return action.payload.users;
    },
    [addUserAsync.fulfilled]: (state: any, action: any) => {
      state.push(action.payload.user);
    },
    [deleteUserAsync.fulfilled]: (state: any, action: any) => {
      return state.filter((user: any) => user.id !== action.payload.id);
    },
  },
});

export default userSlice.reducer;
