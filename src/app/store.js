import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../features/mission/MissionSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
