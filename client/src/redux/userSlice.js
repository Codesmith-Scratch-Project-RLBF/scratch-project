import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  timeFrames: null,
  users: null,
  otherTimeFrame: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signupUser: (state, action) => {
      const { userName, timeFrames, usersData } = action.payload;
      state.userName = userName;
      state.timeFrames = timeFrames;
      state.users = usersData;
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
    setOtherTimeFrame: (state, action) => {
      console.log(action.payload);
      state.otherTimeFrame = action.payload.otherTimeFrames;
    },
  },
});
export const {
  signupUser,
  loginUser,
  logoutUser,
  addTime,
  deleteUser,
  setOtherTimeFrame,
} = userSlice.actions;

export default userSlice.reducer;
