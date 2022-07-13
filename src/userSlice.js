import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  loggedin: false,
  picture: "",
<<<<<<< HEAD
  object: [],
  shouldUpdate: false,
=======
>>>>>>> aa0ff6a16c6ccca56a29341ea542715462831a24
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.loggedin = action.payload.loggedin;
      state.picture = action.payload.picture;
<<<<<<< HEAD
      state.object = action.payload.object;
      state.shouldUpdate = action.payload.shouldUpdate;
=======
>>>>>>> aa0ff6a16c6ccca56a29341ea542715462831a24
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUsername = (state) => state.user.name;
export const selectPicture = (state) => state.user.picture;
export const selectEmail = (state) => state.user.email;
<<<<<<< HEAD
export const selectObject = (state) => state.user.object;
export const selectShouldUpdate = (state) => state.user.shouldUpdate;
export const selectUser = (state) => state.user;
=======
>>>>>>> aa0ff6a16c6ccca56a29341ea542715462831a24

export default userSlice.reducer;
