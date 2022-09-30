import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { pull } from 'lodash';
import fetchMission from './MissionAPI';
import loadingStatus from '../reduxConst';

const ACTION_PREPEND = 'SpaceTravelersHub/Mission';
const initialState = {
  all: [],
  resserved: [],
  status: loadingStatus.idle,
};

const fetch = createAsyncThunk(
  `${ACTION_PREPEND}/FETCH`,
  async () => (await fetchMission()).data.map((missions) => ({
    id: missions.mission_id,
    name: missions.mission_name,
    description: missions.description,
  })),
);

const missionSlice = createSlice({
  name: ACTION_PREPEND,
  initialState,
  reducers: {
    reserve: (state, action) => {
      state.resserved.push(action.payload);
    },
    leave: (state, action) => {
      pull(state.resserved, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetch.pending, (state) => {
        state.status = loadingStatus.pending;
      })
      .addCase(fetch.fulfilled, (state, action) => {
        state.status = loadingStatus.succeeded;
        state.all = action.payload;
      });
  },
});

const { reserve, leave } = missionSlice.actions;

const selectMissions = (state) => state.missions.all;
const selectResserved = (state) => state.missions.resserved;
const selectloadingStatus = (state) => state.missions.status;

export {
  reserve,
  leave,
  fetch,
  selectMissions,
  selectResserved,
  selectloadingStatus,
};

export default missionSlice.reducer;
