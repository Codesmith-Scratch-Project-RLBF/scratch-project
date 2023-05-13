import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  timeFrames: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signupUser: (state, action) => {
      state.userName = action.payload;
      state.timeFrames = action.payload;
    },
    loginUser: (state, action) => {
      state.userName = action.payload;
      state.timeFrames = action.payload;
    },
    logoutUser: (state) => {
      state.userName = null;
      state.timeFrames = {};
    },
  },
});
export const { signupUser, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
