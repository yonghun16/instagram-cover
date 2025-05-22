import { configureStore } from '@reduxjs/toolkit';
import loginUserReducer from '../features/login/loginUserSlice';

export const store = configureStore({
  reducer: {
    loginUser: loginUserReducer,
  },
});


