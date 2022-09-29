import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../features/mission/MissionSlice';
import rocketsReducer from '../features/rockets/RocketSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer
  },
});

export default store;
