import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  timeFrames: {
    Monday: new Array(48).fill(false),
    Tuesday: new Array(48).fill(false),
    Wednesday: new Array(48).fill(false),
    Thursday: new Array(48).fill(false),
    Friday: new Array(48).fill(false),
    Saturday: new Array(48).fill(false),
    Sunday: new Array(48).fill(false),
  },
  users: [],
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

    addTime: (state, action) => {
      const { index, day } = action.payload;
      state.timeFrames[day][index] = true;
    },
    deleteUser: (state) => {
      state = initialState;
    },
  },
});
export const { signupUser, loginUser, logoutUser, addTime, deleteUser } =
  userSlice.actions;

export default userSlice.reducer;
