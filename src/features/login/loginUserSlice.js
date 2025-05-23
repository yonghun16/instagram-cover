import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'loginUser',
  initialState: { 
    name: '', 
    image: '',
    isLoggedIn: false ,
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.isLoggedIn = true;
      state.image = action.payload.image;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
