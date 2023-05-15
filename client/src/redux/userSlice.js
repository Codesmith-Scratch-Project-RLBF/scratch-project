import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  timeFrames: null,
  users: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signupUser: (state, action) => {
      const { userName, timeFrames } = action.payload;
      state.userName = userName;
      state.timeFrames = timeFrames;
    },
    loginUser: (state, action) => {
      state.userName = action.payload.userName;
      state.timeFrames = action.payload.timeFrames;
    },
    logoutUser: (state) => {
      state.userName = null;
      state.timeFrames = {};
    },

    addTime: (state, action) => {
      console.log(index, day);
      console.log('action,payload', action.payload);
      const { index, day } = action.payload;
      state.timeFrames[day][index] = true;
    },
    deleteUser: (state) => {
      state = initialState;
    },
    setupUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});
export const { signupUser, loginUser, logoutUser, addTime, deleteUser } =
  userSlice.actions;

export default userSlice.reducer;
