import { configureStore } from '@reduxjs/toolkit';
import { UserAuthReducer } from './UserAuthSlice';

const Store = configureStore({
  reducer: {
    UserAuth: UserAuthReducer
  },
});

export default Store;
