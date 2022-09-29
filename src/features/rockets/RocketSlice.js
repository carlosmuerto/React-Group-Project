import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { pull } from 'lodash';
import fetchRocket from './RocketAPI';
import loadingStatus from '../reduxConst';

const ACTION_PREPEND = 'SpaceTravelersHub/Mission';
const initialState = {
  all: [],
  resserved: [],
  status: loadingStatus.idle,
};

const fetch = createAsyncThunk(
  `${ACTION_PREPEND}/FETCH`,
  async () => (await fetchRocket()).data.map((rockets) => ({
    id: rockets.id,
    name: rockets.name,
    type: rockets.type,
    flickr_images: rockets.flickr_images,
  })),
);

const rocketSlice = createSlice({
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

const { reserve, leave } = rocketSlice.actions;

const selectRockets = (state) => state.rockets.all;
const selectResserved = (state) => state.rockets.resserved;
const selectloadingStatus = (state) => state.rockets.status;

export {
  reserve,
  leave,
  fetch,
  selectRockets,
  selectResserved,
  selectloadingStatus,
};

export default rocketSlice.reducer;
