import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fname: [],
};
export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Fname: (state, action) => {
      state.fname.push(action.payload);
    },
    Email: (state, action) => {
      state.email.push(action.payload);
    },
    userDelete: (state, action) => {
      delete state.fname[action.payload].Name;
    },
    emailDelete: (state, action) => {
      delete state.fname[action.payload].Email;
    },
    bothDelete: (state, action) => {
      state.fname.splice([action.payload], 1);
    },
    EditName: (state, action) => {
      const { index, newName } = action.payload;
      state.fname[index].Name = newName;
    },
    EditEmail: (state, action) => {
      const { index, newEmail } = action.payload;
      state.fname[index].Email = newEmail;
    },
  },
});

export const {
  Fname,
  userDelete,
  Email,
  emailDelete,
  bothDelete,
  EditName,
  EditEmail,
} = UserSlice.actions;
export default UserSlice.reducer;
