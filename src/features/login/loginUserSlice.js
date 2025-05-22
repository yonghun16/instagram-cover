import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'loginUser',
  initialState: { 
    name: '', 
    isLoggedIn: false ,
    data: null
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload;
      state.isLoggedIn = true;
      state.data = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
