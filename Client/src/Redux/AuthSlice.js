import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  userName: "",
  jwt_token:''
};

export const AuthSlice = createSlice({
  name: "UserAuth",
  initialState,
  reducers: {
    UpdateAuth: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.userName = action.payload.userName;
      state.jwt_token=action.payload.jwt_token
    },
  },
});
export const { UpdateAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
